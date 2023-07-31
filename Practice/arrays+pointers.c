#include<stdio.h>
#include<conio.h>

int main()
{

  int marks[2][3];

     marks[0][0] = 90;
     marks[0][1] = 80;
     marks[0][2] = 70;

     marks[1][0] = 95;
     marks[1][1] = 88;
     marks[1][2] = 87;

     printf("STUDENT FIRST PHYSICS MARKS :- %d \n",marks[0][0]);
     printf("STUDENT FIRST CHEMESTRY MARKS :- %d \n",marks[0][1]);
     printf("STUDENT FIRST BIOLOGY MARKS :- %d \n",marks[0][2]);
     printf("TOTAL MARKS :- %d + %d + %d = %d \n \n",marks[0][0]+marks[0][1]+marks[0][2]);


     printf("STUDENT SECOUND PHYSICS MARKS :- %d \n",marks[1][0]);
     printf("STUDENT SECOUND CHEMESTRY MARKS :- %d \n",marks[1][1]);
     printf("STUDENT SECOUND BIOLOGY MARKS :- %d \n",marks[1][2]);
     printf("TOTAL MARKS = %d + %d + %d = %d \n \n",marks[1][0]+marks[1][1]+marks[1][2]);



    return 0;
}

