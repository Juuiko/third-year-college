package main

import "fmt"

//PieChart is the data type to make the final JSON the pie chart will use
type PieChart struct {
	Lang string `json:"id"`
	Use  int    `json:"value"`
}

func calcPieData([]Data) bool {
	//setup slice for pie chart value
	pieData := make([]PieChart, 0)
	fmt.Println(pieData)
	return true
}
