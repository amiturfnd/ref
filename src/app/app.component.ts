import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
	username = localStorage.username || "Guest"
	changeGuest = function () {
		localStorage.setItem("username", this.username);
	}

	toDoList = localStorage.toDoList ? JSON.parse(localStorage.toDoList) : [{task:"Set your goan for today.", completed:false}]
  newTask = "";
  updateToDoLists = function () {
  	localStorage.toDoList = JSON.stringify(this.toDoList);
  }
  addTask = function () {
  	if (this.newTask != "") { 
  		this.toDoList.unshift({task:this.newTask, completed:false});
  		this.newTask = "";
  		this.updateToDoLists()
  	}
  }
  removeTask = function (index) {
  	this.toDoList.splice(index,1);
  	this.updateToDoLists()
  }
  completeTask = function (index) {
  	this.toDoList[index].completed = !this.toDoList[index].completed;
  	this.updateToDoLists()
  }
  completeAllTask = function () {
  	if(confirm("Are you sure, you want to complete all tasks?") != true) return;
  	for(let item of this.toDoList) {
		  item.completed = true;
		}
		this.updateToDoLists()
  }

  removeAllTask = function () {
  	if(confirm("Are you sure, you want to delete all tasks?") != true) return;
  	this.toDoList = []
  	this.updateToDoLists()
  }
}
