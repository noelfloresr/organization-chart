
export const organigrama = 
[
		{
			title: "IT",
			type: "department",
			background: "#aaaaaa",
			members: [
				[
					{
						member: "Rafael Hueso",
						position: "CIO",
						image: "url/placeholder.png",
						level: 1
					},
				],
				[
					{
						member: "Santiago Fernández",
						position: "Technical Manager",
						image: "url/placeholder.png",
						level: 2
					}
				]
			],
			groups: [
				{
					title: "Infrastructure",
					type: "area",
					background: "#bbbbbb",
					members: [
						[
							{
								member: "Juan Luis Cobo",
								position: "Infrastructure Senior Technician",
								image: "url/placeholder.png",
								level: 1
							},
						],
						[
							{
								member: "Iván Paredes",
								position: "Infrastructure Technician",
								image: "url/placeholder.png",
								level: 2,
							},
							{
								member: "Raúl Fernández",
								position: "Infrastructure Technician",
								image: "url/placeholder.png",
								level: 2
							}
						]
					],
					groups: []
				},
				{
					title: "Development",
					type: "area",
					background: "#bbbbbb",
					members: [],
					groups: [
						{
							title: "DevOps",
							type: "subarea",
							background: "#cccccc",
							members: [
								[
									{
										member: "Fidel Mystal",
										position: "DevOps Manager | IT",
										image: "url/placeholder.png",
										level: 1
									},
								],
								[
									{
										member: "Pedro Frutos",
										position: "Senior Full Stack Developer | IT",
										image: "url/placeholder.png",
										level: 2
									},
									{
										member: "Nacho Cavero",
										position: "Senior Full Stack Developer | IT",
										image: "url/placeholder.png",
										level: 2
									},
								],
								[
									{
										member: "New Member 1",
										position: "Senior Full Stack Developer | IT",
										image: "url/placeholder.png",
										level: 3
									},
									{
										member: "New Member 2",
										position: "Senior Full Stack Developer | IT",
										image: "url/placeholder.png",
										level: 3
									}
								]
							],
							groups: []
						},
						{
							title: "QE Connect",
							type: "subarea",
							background: "#cccccc",
							members: [
								[
									{
										member: "Javier Hurtado",
										position: "Head of Asset & Internal Process Management Platform | IT",
										image: "url/placeholder.png"
									},
								],
								[
									{
										member: "Javier Muñoz",
										position: "Developer of Asset & Internal Process Management Platform | IT",
										image: "url/placeholder.png"
									}
								]
							],
							groups: []
						},
						{
							title: "FinTech",
							type: "subarea",
							background: "#cccccc",
							members: [
								[
									{
										member: "Ramón González",
										position: "FinTech Manaager | IT",
										image: "url/placeholder.png"
									},
								],
								[
									{
										member: "Nacho Tizón",
										position: "FinTech Technician | IT",
										image: "url/placeholder.png"
									}
								]
							],
							groups: []
						},
						{
							title: "Front Dev",
							type: "subarea",
							background: "#cccccc",
							members: [
								[
									{
										member: "Noel Flores",
										position: "Senior Front End Develper | IT",
										image: "url/placeholder.png"
									},
								],
								[
									{
										member: "Ernesto Valero",
										position: "Intern | IT",
										image: "url/placeholder.png"
									}
								]
							],
							groups: []
						}
					]
				},
				
			]
		}
	]
