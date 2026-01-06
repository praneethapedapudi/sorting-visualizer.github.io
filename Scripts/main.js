var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");
//var array_speed=document.getElementById('a_speed').value;

var butts_algos=document.querySelectorAll(".algorithms button");

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_ctnr");
cont.style="flex-direction:row";

//Array generation and updation.

inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

function generate_array()
{
    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 3*(inp_as.max - inp_as.min) ) + 8;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size= 0.1;
        divs[i].setAttribute("data-bar-state", "blue");
        divs[i].style=" margin:0% " + margin_size + "%; background-color:var(--bar-default); width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();

// Algorithm info data
var algoInfo = {
    "Bubble": {
        name: "Bubble Sort",
        description: "Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
        intuition: "Like bubbles rising to the surface-larger values gradually 'bubble up' to their correct positions."
    },
    "Selection": {
        name: "Selection Sort",
        description: "Finds the minimum element from the unsorted portion and places it at the beginning.",
        intuition: "Think of selecting the smallest item each time, just like picking cards from a deck one by one."
    },
    "Insertion": {
        name: "Insertion Sort",
        description: "Builds the sorted array one item at a time by inserting each element into its correct position.",
        intuition: "Similar to sorting playing cards in your hand-insert each new card into its proper place."
    },
    "Merge": {
        name: "Merge Sort",
        description: "Divides the array into halves, sorts them recursively, then merges the sorted halves.",
        intuition: "Divide and conquer: split in half, sort each half, then combine like merging two sorted stacks."
    },
    "Quick": {
        name: "Quick Sort",
        description: "Picks a pivot element and partitions the array around it, sorting recursively on both sides.",
        intuition: "Choose a pivot, separate smaller and larger values, then repeat on each side-fast but pivot choice matters."
    },
    "Heap": {
        name: "Heap Sort",
        description: "Builds a max-heap from the array, then repeatedly extracts the maximum element.",
        intuition: "Organize data as a tree structure where parent nodes are always larger-then extract maximums efficiently."
    }
};

function updateAlgoInfo(algoName) {
    var info = algoInfo[algoName];
    if (info) {
        document.getElementById("algo-name").textContent = info.name;
        document.getElementById("algo-description").textContent = info.description;
        document.getElementById("algo-intuition").textContent = info.intuition || "";
    }
}

//Running the appropriate algorithm.
for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    updateAlgoInfo(this.innerHTML);
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
    }
}