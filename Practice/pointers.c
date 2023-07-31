#include<stdio.h>
#include<conio.h>

int main()
{

    int marks[5];

    printf("Enter Physics Marks :-");
    scanf("%d",&marks[0]);

    printf("Enter Math Marks :-");
    scanf("%d",&marks[1]);

    printf("Enter Chemestry Marks :-");
    scanf("%d",&marks[2]);

    printf("Enter Biology Marks :-");
    scanf("%d",&marks[3]);

    printf("Enter Computer Marks :-");
    scanf("%d",&marks[4]);

    printf("Physics = %d , Math = %d , Chemestry = %d , Biology = %d , Computer = %d\n",marks[0],marks[1],marks[2],marks[3],marks[4]);

    printf("Total Marks is :- %d  %d  %d  %d  %d = %d \n\n",marks[0]+marks[1]+marks[2]+marks[3]+marks[4]);




    return 0;
}



