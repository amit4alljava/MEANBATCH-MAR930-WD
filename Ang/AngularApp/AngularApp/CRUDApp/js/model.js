app.factory("crudfactory",function(){
	var crudOperations={
		noteList:[],
		id:1,
		getId:function(){
			return this.id;
		},
		add:function(desc,author){
			var noteObject = new Note(this.id,desc,author);
			this.noteList.push(noteObject);
			this.id++;
		},
		getNotes:function(){
			return this.noteList;
		},
		deleteRecords:function(){
			return this.noteList = this.noteList.filter(function(note){
				return note.mark == false;
			})
		},
		markCount:function(){
		return this.noteList.filter(function(note){
				return note.mark == true;
			}).length;
		
		},
		unmarkCount:function(){
			return this.noteList.filter(function(note){
				return note.mark == false;
			}).length;
		}
	}
	return crudOperations;
});

function Note(id,desc,author){
this.id = id;
this.desc = desc;
this.author=author;
	this.mark = false;
	this.toggle=function(){
		this.mark = !this.mark;
		console.log(this.mark);
	}
}