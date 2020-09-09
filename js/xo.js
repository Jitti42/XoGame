function range(start,stop,step=1){
    arr = []
    for (let index = start; index < stop; index+=step) {
        arr.push(index)
    }
    return arr
}

function factorial(n){
    result = 1
    for (let index = n; index > 0; index--) {
        result*=index
    }
    return result
}

function swap_solution(origin,n){
    l = n-2
    r = n-1
    lr = -1

    solutions = []

    for (let index = 0; index < factorial(n); index++) {
        solution.push(["X"].concat(origin.map(x=>x)))
        solution.push(["O"].concat(origin.map(x=>x)))
 
        let b = origin[l]
        origin[l] = origin[r]
        origin[r] = b

        if (l==n-2 && r==n-1)
            lr = -1
        else if (l==0 && r==1)
            lr = 1
        
        l += lr
        r += lr
    }
}

function init_solution(n) {
    solution = []
    for (let i = 0; i < n; i++) {
        hori_start = i*n+1
        hori_stop = hori_start+n

        verti_start = i+1
        verti_stop = verti_start+(n*2)+1

        solution.concat(swap_solution(range(hori_start,hori_stop),n))
        solution.concat(swap_solution(range(verti_start,verti_stop,n),n))
    }

    solution.concat(swap_solution(range(1,(n*n)+1,n+1),n))
    solution.concat(swap_solution(range(n,(n*n)-(n-1)+1,n-1),n))

    return solution;
}
function Eu(n){
	var euclidian = function(n)
	let cell1 = $('input[name="cell1"]').val()
    let cell2 = $('input[name="cell2"]').val()
    let cell3 = $('input[name="cell3"]').val()  
		for(let i=0;i<n;i++){
			 var a = cell1 - solution[i][1];
             var b = cell2 - solution[i][2];
             var c = cell3 - solution[i][3];

             var d = Math.sqrt(a*a + b*b + c*c);
			{console.log(d);}
			{console.log(i);}
		} 
               
	
}
$(document).ready(function () {
    $("#btn-execute").on("click",function(){
        let solution = init_solution(3)		
        console.log(solution)
		var euclidian = function(n){
			
		}
		
    })
});