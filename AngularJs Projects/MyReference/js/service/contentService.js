myRefApp.factory('contentService', function(){
	
	var contents = {}; 
	
	contents.saved = localStorage.getItem('currentRef'); 
	contents.allRef = (localStorage.getItem('currentRef') != null) ? JSON.parse(contents.saved):[{refId:0001, refText: 'Text', refSource: 'RefSource', refLink: 'RefLink', tag:'tag1,tag,2,tag2', rating: 1, date:'23-02-2017', refUserid: 111}]; 
	localStorage.setItem('currentRef', JSON.stringify(contents.allRef)); 
	
	contents.getAllRef = function(){
		return contents.allRef;
	}
	
	contents.saveNewReference = function(newRef){
		contents.allRef.push(newRef); 
		localStorage.setItem('currentRef', JSON.stringify(contents.allRef)); 
	}
	
	contents.getAllTags = function(){
		var tags = []; 
		angular.forEach(contents.allRef, function(value, key){
			var tag = value.tag.split(','); 
			if(tag.length > 1){
				angular.forEach(tag, function(value,key){
					tags.push(value); 
				});
			}else{
				tags.push(value.tag); 
			}
		}); 
		
		return tags; 
	}
	
	return contents; 
}); 