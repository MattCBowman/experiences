// Events vertical

module.exports = {
	answers: {
		experienceKey: "my_super_experience",
		experienceLayout: {
			script: "events_script",
			dom: "events_dom",
		},
		additionalData1: {},
		additionalData2: {},
		componentConfig: {
			SearchBar: {
				/* config for searchbar */
			}
		},
		excludedComponents: [ "SearchyMcSearchBarFace" ]
	},
	title: "Event Search",
	mapToOutput: [
		{
			inputFileName: "events.hbs",
			outputFileName: "events.html"
		}
	],
}