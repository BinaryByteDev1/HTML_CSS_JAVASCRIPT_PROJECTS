#include<stdio.h>
#include<conio.h>

int main()
{

    int x , y , z;
    int choice;
    printf("Please enter your choice...\n\n");

    printf("CASE 1 IS ADDITION[+]\n\n");
    printf("CASE 2 IS SUBTRACTION[-]\n\n");
    printf("CASE 3 IS MULTIPLICATION[*]\n\n");
    printf("CASE 4 IS DIVISION[/]\n\n");
    scanf("%d",&choice);


    printf("Please Enter the two Numbers\n");
    scanf("%d%d",&x,&y);

    switch(choice)
    {

        case 1:z=x+y;
        printf("Sum of %d + %d = %d",x,y,x+y);
        break;

        case 2:z=x-y;
        printf("Sum of %d - %d = %d",x,y,x-y);
        break;

        case 3:z=x*y;
        printf("Sum of %d * %d = %d",x,y,x*y);
        break;

        case 4:z=x/y;
        printf("Sum of %d / %d = %d",x,y,x/y);
        break;

        default:
            printf("Please Enter The Correct Case");


    return 0;
}
