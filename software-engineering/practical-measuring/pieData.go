package main

//PieChart is the data type to make the final JSON the pie chart will use
type PieChart struct {
	Lang string `json:"id"`
	Use  int    `json:"value"`
}

func calcPieData(data []Data) []PieChart {
	//setup slice for pie chart value
	pieData := make([]PieChart, 0)

	dataFound := false

	//for each repo
	for i := range data {
		//take each language used
		for k, v := range data[i].languages {
			//check if it's already in the final slice
			for j := 0; j < len(pieData) && !dataFound; j++ {
				//if it's found then add bytes
				if pieData[j].Lang == k {
					pieData[j].Use += v
					dataFound = true
				}
			}
			//if it isn't found, add it to the final slice
			if dataFound == false {
				pieData = append(pieData, PieChart{k, v})
			} else {
				dataFound = false
			}
		}

	}
	return pieData
}
