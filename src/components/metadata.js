export const questions = {
   variables : [ 
    {
        questionText: 'How many keywords are there in C Language ?',
        answerOptions: [
            { answerText: '32', isCorrect: true },
            { answerText: '22', isCorrect: false },
            { answerText: '30', isCorrect: false },
            { answerText: '10', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the process to create increment and decrement statement in C? ',
        answerOptions: [
            { answerText: '- , +', isCorrect: false },
            { answerText: '++ , --', isCorrect: true },
            { answerText: 'both a and b', isCorrect: false },
            { answerText: 'none of the', isCorrect: false },
        ],
    },
    {
        questionText: 'Which of the following cannot be a variable name in C?',
        answerOptions: [
            { answerText: 'volatile', isCorrect: true },
            { answerText: 'area', isCorrect: false },
            { answerText: 'mega', isCorrect: false },
            { answerText: 'number', isCorrect: false },
        ],
    },
    {
        questionText: 'Identify wrong C keywords below',
        answerOptions: [
            { answerText: 'auto, double, int, struct ', isCorrect: false },
            { answerText: 'break, else, long, switch ', isCorrect: false },
            { answerText: 'case, enum, register, typedef', isCorrect: false },
            { answerText: ' char, extern, intern, return', isCorrect: true },
        ],
    },
    {
        questionText: <p> 4. What is the output of this program? <br />#include stdio.h <br /> int main() <br /> int x = 10; <br /> float x = 10.0;	<br />printf("%d",x); 	<br />return 0; </p>,
        answerOptions: [
            { answerText: '10.1', isCorrect: true },
            { answerText: 'break, else, long, switch ', isCorrect: false },
            { answerText: '01', isCorrect: false },
            { answerText: '10', isCorrect: false },
        ],
    },
    {
        questionText: ' Find the correct C Keyword below.',
        answerOptions: [
            { answerText: 'breaker ', isCorrect: false },
            { answerText: 'default', isCorrect: true },
            { answerText: 'shorter ', isCorrect: false },
            { answerText: 'go to', isCorrect: false },
        ],
    },
    {
        questionText: ' Which of the following is true for variable names in C?',
        answerOptions: [
            { answerText: 'Variable names cannot start with a digit', isCorrect: true },
            { answerText: 'Variable can be of any length ', isCorrect: false},
            { answerText: 'They can contain alphanumeric characters as well as special characters ', isCorrect: false },
            { answerText: 'Reserved Word can be used as variable name ', isCorrect: false },
        ],
    },
],
 datatype : [
    {
        questionText: 'Which of the following is not a valid declaration in C?',
        answerOptions: [
            { answerText: '1. short int x;', isCorrect: false },
            { answerText: 'signed short x;', isCorrect: false},
            { answerText: 'short x;', isCorrect: false },
            { answerText: 'unsigned short x;', isCorrect: false },
            { answerText: 'All are valid', isCorrect: true },

        ],
    },
    {
        questionText: <p>Predict the output <br /> int main() <br />   float c = 5.0; <br />   printf ("Temperature in Fahrenheit is %.2f", (9/5)*c + 32); <br />   return 0;</p>,
        answerOptions: [
            { answerText: 'Temperature in Fahrenheit is 41.00', isCorrect: false },
            { answerText: 'Temperature in Fahrenheit is 0.00', isCorrect: false},
            { answerText: 'Temperature in Fahrenheit is 37.0', isCorrect: true },
            { answerText: 'Compiler Error', isCorrect: false },
        ],
    },
    {
        questionText: 'In C, sizes of an integer and a pointer must be same.',
        answerOptions: [
            { answerText: 'True', isCorrect: false },
            { answerText: 'Fsle', isCorrect: true},
        ],
    },
    {
        questionText: <p>Output? <br /> int main()  <br /> void *vptr, v;   <br />  v = 0;  <br />   vptr = &v;   <br />  printf("%v", *vptr); <br />    getchar();   <br /> return 0;</p>,
        answerOptions: [
            { answerText: '0', isCorrect: false },
            { answerText: 'Compiler Error', isCorrect: true},
            { answerText: 'garbage value', isCorrect: false},
        ],
    },
    {
        questionText:'Suppose n and p are unsigned int variables in a C program. We wish to set p to nC3. If n is large, which of the following statements is most likely to set p correctly?',
        answerOptions: [
            { answerText: 'p = n * (n-1) * (n-2) / 6;', isCorrect: false },
            { answerText: 'p = n * (n-1) / 2 * (n-2) / 3;', isCorrect: true},
            { answerText: 'p = n * (n-1) / 3 * (n-2) / 2;', isCorrect: false},
            { answerText: 'p = n * (n-1) * (n-2) / 6.0;', isCorrect: false},
        ],
    },
],
operators : [
    {
        questionText:'Which of the following operators takes only integer operands?',
        answerOptions: [
            { answerText: '+', isCorrect: false },
            { answerText: '*', isCorrect: false},
            { answerText: '/', isCorrect: false},
            { answerText: '%', isCorrect: true},
        ],
    },
    {
        questionText: <p> In an expression involving || operator, evaluation <br /> 
        I. Will be stopped if one of its components evaluates to false <br />
        II. Will be stopped if one of its components evaluates to false <br />
        III. Takes place from right to left <br />
        IV. Takes place from left to right <br />
        </p>,
        answerOptions: [
            { answerText: 'I and II ', isCorrect: false },
            { answerText: 'I and III', isCorrect: false},
            { answerText: ' II and III', isCorrect: false},
            { answerText: 'II and IV  ', isCorrect: true},
        ],
    },
    {
        questionText:'Operator % in C Language is called?',
        answerOptions: [
            { answerText: 'Percentage Operator', isCorrect: false },
            { answerText: 'Quotient Operator', isCorrect: false},
            { answerText: 'Modulus', isCorrect: true},
            { answerText: 'Division ', isCorrect: false},
        ],
    },
    {
        questionText: 'What is the value of a? int a = 10 + 4.867; ',
        answerOptions: [
            { answerText: 'a = 10 ', isCorrect: false },
            { answerText: 'a = 14 ', isCorrect: true},
            { answerText: 'a = 14.867', isCorrect: false},
            { answerText: 'compiler error', isCorrect: false},
        ],
    },
    {
        questionText: 'What is the value of x? float x = 3.5 + 4.5; ',
        answerOptions: [
            { answerText: 'x = 8.0 ', isCorrect: true },
            { answerText: 'x = 8 ', isCorrect: false},
            { answerText: 'x = 7', isCorrect: false},
        ],
    },
    {
        questionText: ' Associativity of C Operators *, /, %, +, - and = is ',
        answerOptions: [
            { answerText: 'Operators *, / and % have Left to Right Associativity. Operators + and - have Left to Right Associativity. Operator = has Right to Left Associativity. ', isCorrect: true },
            { answerText: 'Operators *, / and % have Right to Left Associativity. Operators + and - have Left to Right Associativity. Operator = has Right to Left Associativity. ', isCorrect: false},
            { answerText: 'Operators *, / and % have Right to Left Associativity. Operators + and - have Right to Left Associativity. Operator = has Right to Left Associativity. ', isCorrect: false},
            { answerText: 'Operators *, / and % have Right to Left Associativity. Operators + and - have Right to Left Associativity. Operator = has Left to Right Associativity. ', isCorrect: false},

        ],
    },
],
ifelse :
[
    {
        questionText:  <p> Find the output of the given C program. <br /> #include stdio.h <br /> int main() <br /> if(-5) <br /> printf("a"); <br /> printf("b"); <br /> else <br /> printf("c"); <br /> printf("d"); <br /> return 0; </p> ,
        answerOptions: [
            { answerText: 'abd ', isCorrect: false },
            { answerText: 'cd', isCorrect: false},
            { answerText: 'compiler error', isCorrect: true},
            { answerText: 'ab', isCorrect: false},
        ],
    },
    {
        questionText: <p>Find the output of the given C program. <br />
        #include stdio.h <br />
        int main()    <br />
        if(-5)   <br />
        printf("a"); <br />    
        printf("b");  <br />
          else  <br />
        printf("c");   <br />
        printf("d"); <br />  
        return 0;
        </p>,
        answerOptions: [
            { answerText: 'abd ', isCorrect: true },
            { answerText: 'cd', isCorrect: false},
            { answerText: 'compiler error', isCorrect: false},
            { answerText: 'ab', isCorrect: false},
        ],
    },
    {
        questionText: <p> <h5>What will be the output of following program ?</h5>
        #include stdio.h <br />
        void main() <br />
            if(!printf("")) <br />
                printf("Okkk"); <br />
            else <br />
                printf("Hiii"); <br />
    
        </p>,
        answerOptions: [
            { answerText: 'Okkk ', isCorrect: true },
            { answerText: 'hiii', isCorrect: false},
            { answerText: 'error', isCorrect: false},
            { answerText: 'none', isCorrect: false},
        ],
    },
    {
        questionText: <p>Find the output of the given C program.  <br />
        #include stdio.h int main() <br />  
        if(-5);  <br />     
        printf("a"); <br />     
        printf("b");  <br /> 
           else   <br />   
        printf("c");   <br /> 
        printf("d");   <br /> 
        return 0;
        </p>,
        answerOptions: [
            { answerText: 'abd ', isCorrect: false },
            { answerText: 'cd', isCorrect: false},
            { answerText: 'compile time error', isCorrect: true},
            { answerText: 'ab', isCorrect: false},
        ],
    }, {
        questionText: <p> <h5>Find the output of the given C program.</h5> <br />
       #include stdio.h <br />
void main() <br />
    int x=22; <br />
    if(x=10) <br />
        printf("TRUE"); <br />
    else <br />
        printf("FALSE"); 
        </p>,
        answerOptions: [
            { answerText: 'abd ', isCorrect: false },
            { answerText: 'cd', isCorrect: false},
            { answerText: 'compile time error', isCorrect: true},
            { answerText: 'ab', isCorrect: false},
        ],
    },
],
forloop : [
    {
        questionText:'The C code ‘for(;;)’ represents an infinite loop. It can be terminated by ___________',
        answerOptions: [
            { answerText: 'break  ', isCorrect: true },
            { answerText: ' exit(0)', isCorrect: false},
            { answerText: 'abort()', isCorrect: false},
            { answerText: 'terminate', isCorrect: false},
        ],
    },{
        questionText: 'What will be the correct syntax for running two variables for loop simultaneously? ',
        answerOptions: [
            { answerText: 'for (i = 0; i < n; i++) for (j = 0; j < n; j += 5', isCorrect: false },
            { answerText: ' for (i = 0, j = 0; i < n, j < n; i++, j += 5) ', isCorrect: false},
            { answerText: 'for (i = 0; i < n;i++){} for (j = 0; j < n;j += 5){}', isCorrect: true},
            { answerText: 'none of the mentioned', isCorrect: false},
        ],
    },{
        questionText: '. Which of the following cannot be used as LHS of the expression in for (exp1;exp2; exp3)? ',
        answerOptions: [
            { answerText: 'variable  ', isCorrect: false },
            { answerText: 'function ', isCorrect: false},
            { answerText: 'typedef ', isCorrect: false},
            { answerText: 'macros', isCorrect: true},
        ],
    },{
        questionText: <p>  What will be the output of the following C code? <br />
        #include stdio.h <br />
        void main() <br />
        int k = 0; <br />
        for (k) <br />
        printf("Hello");         
        </p>,
        answerOptions: [
            { answerText: ' Compile time error  ', isCorrect: true },
            { answerText: ' Hello is printed thrice', isCorrect: false},
            { answerText: 'Nothing ', isCorrect: false},
            { answerText: 'Varies', isCorrect: false},
        ],
    },{
        questionText: 'Choose a correct C for loop syntax.',
        answerOptions: [
            { answerText: ' for(initialization; condition; increment operation) { //statements } ', isCorrect: true },
            { answerText: ' for(declaration; condition; increment operation) { //statements } ', isCorrect: false},
            { answerText: 'for(declaration; increment operation; condition) { //statements } ', isCorrect: false},
            { answerText: 'for(initialization; condition; increment operation;) { //statements }', isCorrect: false},
        ],
    },
],
whileloop : [
    {
        questionText: <p> What will be the output of the following C code? <br />
        #include stdio.h <br />
        int main() <br />
        while () <br />
            printf("In while loop "); <br />
        printf("After loop\n");
        </p>,
        answerOptions: [
            { answerText: ' In while loop after loop', isCorrect: false },
            { answerText: 'After loop ', isCorrect: false},
            { answerText: 'Compile time error', isCorrect: true},
            { answerText: 'Infinite loop ', isCorrect: false},
        ],
    },
    {
        questionText: <p>  What will be the output of the following C code? <br /> 
        #include stdio.h <br />
        void main() <br />
        int i = 0; <br />
        while (++i) <br />
        printf("H");  
        </p>,
        answerOptions: [
            { answerText: 'H is printed infinite times', isCorrect: true },
            { answerText: 'Compile time error', isCorrect: false},
            { answerText: 'Varies', isCorrect: false},
            { answerText: 'H', isCorrect: false},
        ],
    },
    {
        questionText: 'Choose a correct C for loop syntax.',
        answerOptions: [
            { answerText: ' for(initialization; condition; increment operation) { //statements } ', isCorrect: true },
            { answerText: ' for(declaration; condition; increment operation) { //statements } ', isCorrect: false},
            { answerText: 'for(declaration; increment operation; condition) { //statements } ', isCorrect: false},
            { answerText: 'for(initialization; condition; increment operation;) { //statements }', isCorrect: false},
        ],
    },
    {
        questionText: 'Choose a correct C for loop syntax.',
        answerOptions: [
            { answerText: ' for(initialization; condition; increment operation) { //statements } ', isCorrect: true },
            { answerText: ' for(declaration; condition; increment operation) { //statements } ', isCorrect: false},
            { answerText: 'for(declaration; increment operation; condition) { //statements } ', isCorrect: false},
            { answerText: 'for(initialization; condition; increment operation;) { //statements }', isCorrect: false},
        ],
    },
    {
        questionText: 'Choose a correct C for loop syntax.',
        answerOptions: [
            { answerText: ' for(initialization; condition; increment operation) { //statements } ', isCorrect: true },
            { answerText: ' for(declaration; condition; increment operation) { //statements } ', isCorrect: false},
            { answerText: 'for(declaration; increment operation; condition) { //statements } ', isCorrect: false},
            { answerText: 'for(initialization; condition; increment operation;) { //statements }', isCorrect: false},
        ],
    },
]
};