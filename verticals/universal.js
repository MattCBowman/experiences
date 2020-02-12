// Universal vertical
let universal = {
	answers: {
		experienceKey: "a_client_experience",
		experienceLayout: "universal_experience",
		componentConfig: {
			verticals: {
				links: {
					Card: {
						/* link results card config */
					},
				},
				events: config.events.componentConfig,
				locations: config.locations.componentConfig,
			}
		}
	},
	title: "Universal Search"
};

export {universal};