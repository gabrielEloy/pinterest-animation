const grids = document.querySelectorAll('.grid');
const headings = document.querySelectorAll('.heading .wrapper .text');

console.log(headings)

function enterScreen(index){
    const grid = grids[index];
    const heading = headings[index];

    const gridColumns =  grid.querySelectorAll('.column');

    grid.classList.add('active');

    gridColumns.forEach(column => column.classList.remove('animate-before', 'animate-after'))
    heading.classList.remove('animate-before', 'animate-after');
}
function exitScreen(index, exitDelay){
    const grid = grids[index];
    const heading = headings[index];
    
    const gridColumns =  grid.querySelectorAll('.column');
    gridColumns.forEach(column => column.classList.add('animate-after'));
    heading.classList.add('animate-after')

    setTimeout(() => {
        grid.classList.remove('active')
    }, exitDelay)
}


function setupAnimationCycle({timePerScreen,  exitDelay}){
    const cycleTime = timePerScreen + exitDelay;
    
    let index = 0;

    
    setInterval(() => {
        enterScreen(index);
        setTimeout(() => {
            exitScreen(index, exitDelay);

            
            if(index + 1 === headings.length){
                index = 0;
                return
            };
    
            index += 1;
        }, timePerScreen);
    }, cycleTime);
}

setupAnimationCycle({
    timePerScreen: 4000,
    exitDelay: 200 * 7
})