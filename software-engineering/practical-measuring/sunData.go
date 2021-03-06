package main

//SunChartRepo is the data type to hold the list of repos
type SunChartRepo struct {
	Name      string         `json:"name"`
	Languages []SunChartLang `json:"children"`
}

//SunChartLang is the data type to to hold the individual languages
type SunChartLang struct {
	Name string `json:"name"`
	Loc  int    `json:"loc"`
}

func calcSunData(data []Data) []SunChartRepo {
	//setup slice for pie chart value
	sunData := make([]SunChartRepo, 0)

	//for each repo
	for i := range data {
		//make empty language struct
		langData := make([]SunChartLang, 0)
		//fill in language struct
		for k, v := range data[i].languages {
			langData = append(langData, SunChartLang{k, v})
		}
		//add name and language struct
		sunData = append(sunData, SunChartRepo{data[i].repo.GetName(), langData})
	}

	return sunData
}
