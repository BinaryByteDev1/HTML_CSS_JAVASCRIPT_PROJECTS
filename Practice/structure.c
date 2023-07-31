#include<stdio.h>
#include<conio.h>
#include<string.h>

struct student {
    int name[100];
    int address[100];
    int countrt[100];
    int gender[100];
};

int main()
{
    struct student data;
    strcpy(data.name,"HILAL AHMAD GANIE...");
    strcpy(data.address,"LOLAB KALAROOS...");
    strcpy(data.countrt,"INDIA...");
    strcpy(data.gender,"MALE...");

    printf("Student Name :- %s \n",data.name);
    printf("Student Address :- %s \n",data.address);
    printf("Student Country :- %s \n",data.countrt);
    printf("Student Gender :- %s \n",data.gender);

    printf("\n \n");

    return 0;

}


