const LWAnagramSolver = require("./LWAnagramSolverFunctions");

function main()
{
    var project = "LWAnagramSolver";  // Strings are immutable
    console.log(project + "\n");
    
    // "let" allows for block-scoped variables
    let secondLine = "\t";
    secondLine += "Name of the dictionary file:";
    console.log(secondLine);
    
    var x = 65;
    x++;
    x -= 2;
    x *= 8;
    x /= 8;
    if (x == 64)
    {
        var thirdLine = ["\n\tPhrase to ", "scramble (return", " to quit): "];
        for (var i = 0; i < thirdLine.length; i++)
        {
            process.stdout.write(thirdLine[i]);
        }
        
        console.log();
        
        if (project.length == x - 49)
        {
            console.log("\tMax words to include (0 for no max): ");
        }
    }

    LWAnagramSolver.writeYAML();
}


main();
