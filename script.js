function shortcut(s1, s2) {
  // your code here
	let final='';
	let firstLetter= s1[0];
	let secondLetter= s2[0];
	if(firstLetter=='' || secondLetter==''){
		final='';
	}else{
       final= firstLetter+secondLetter;
	}
	return final;
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
