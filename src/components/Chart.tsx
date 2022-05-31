import { FC, useState } from "react";
import { organigrama } from "../organigrama";

console.log("organigrama", organigrama);

const RenderMember = (props: any) => {
  return (
    <div className="flex">
      {props.member.map((item: any) => {
        return (
          <div className="m-2 w-full bg-white p-4" style={{ width: "200px" }}>
            {item.member}
          </div>
        );
      })}
    </div>
  );
};

const RenderMembers = (props: any) => {
  return (
    <div className="flex flex-col items-center">
      {props.members.map((item: any, index: number) => {
        return <RenderMember key={index} member={item} />;
      })}
    </div>
  );
};

const RenderGroup = (props: any) => {
  return (
    <div className="m-8 p-2 text-center mx-auto" style={{ background: props.group.background, margin: "15px" }}>
      <h2 className="font-bold">{props.group.title} </h2>
      {props.group.members.length ? <RenderMembers members={props.group.members} /> : <></>}
      {props.group.groups.length ? <RecursiveGroup groups={props.group.groups} /> : <></>}
    </div>
  );
};

const RecursiveGroup = (props: any) => {
  return (
    <div className="flex w-full">
      {props.groups.map((item: any) => {
        console.log("item", item);
        return <RenderGroup group={item} key={item.title} />;
      })}
    </div>
  );
};

const CustomChart: FC = () => {
  return <RecursiveGroup groups={organigrama} />;
};

export default CustomChart;
