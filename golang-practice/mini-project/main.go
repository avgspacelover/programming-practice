package main

import "fmt"

func main(){
	
	
	fmt.Println("Hi");

	//var card string = "Ace of Spades"

	card := "Ace of Spades"

	fmt.Println(card)

	card2 := newCard()

}

func newCard() string {
	return "Five of Diamonds"
}