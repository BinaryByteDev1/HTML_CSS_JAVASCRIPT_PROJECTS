#include<iostream>
using namespace std;

void decrease(int p){
    p=p*2;


}
int main(){
    int p = 24;
    decrease(p);
    cout<<p<<endl;


return 0;
}




/*
int add(int x,int y = 0,int z = 0){
    return(x+y+z);
}


int main(){
    cout<<add(10)<<endl;
    cout<<add(10,20)<<endl;
    cout<<add(10,30)<<endl;


}

/*int addition(int,int);
int multiplication(int,int);

   int main(){
       cout<<addition(10,20)<<endl;
       cout<<multiplication(10,20)<<endl;



       return 0;
   }
   int addition(int x , int y){
        return(x+y);
   }
   int multiplication(int x , int y){
        return(x*y);
   }

/*int area_OF_square(int side){
      int total=side*side;
      return total;

  }
int area_of_rectangle(int length , int breadth){
      int total=length*breadth;
      return total;

}
float area_of_circle(float radius){
      float total=3.14*radius*radius;
      return total;
}
    void square(){
      cout<<"===========AREA OF SQUARE==========="<<endl;
      return;
    }
       void rectangle(){
      cout<<"===========AREA OF RECTANGLE==========="<<endl;
      return;
    }
       void circle(){
      cout<<"===========AREA OF CIRCLE==========="<<endl;
      return;
    }


  int main(){


      int side;
      square();
      cout<<"Enter the value side :- ";   //AREA OF SQUARE...//
      cin>>side;
      cout<<"area of square is :- "<<area_OF_square(side)<<endl;


cout<<endl;
cout<<endl;


      int length;
      rectangle();
      cout<<"Enter the value length :- ";
      cin>>length;

      int breadth;
      cout<<"Enter the value breadth :- ";   //AREA of rectangle...//
      cin>>breadth;
      cout<<"area of Rectangle is :- "<<area_of_rectangle(length,breadth)<<endl;


cout<<endl;
cout<<endl;


      float radius;
      circle();
      cout<<"Enter the value radius :- ";   //AREA OF CIRCLE...//
      cin>>radius;
      cout<<"area of Circle is :- "<<area_of_circle(radius)<<endl;


    /*int add(int num1,int num2){
      int sum=num1+num2;
      return sum;
      }

int multiply(int num1,int num2){
      int mult=num1*num2;
      return mult;
      }


int sub(int num1,int num2){
      int subt=num1-num2;
      return subt;
      }

int division(int num1,int num2){
      int div=num1/num2;
      return div;
      }


int main(){

    cout<<"============================"<<endl;
    int x;
    cout<<"Enter the value of X :- ";
    cin>>x;
    int y;
    cout<<"Enter the value of y :- ";
    cin>>y;
    cout<<"Sum of x + y = "<<add(x,y)<<endl;
    cout<<"============================"<<endl;



    cout<<endl;
    cout<<"============================"<<endl;
    int a;
    cout<<"Enter the value of a :- ";
    cin>>a;
    int b;
    cout<<"Enter the value of b :- ";
    cin>>b;
    cout<<"multiply of a * b = "<<multiply(a,b)<<endl;
    cout<<"============================"<<endl;


     cout<<endl;
    cout<<"============================"<<endl;
    int n;
    cout<<"Enter the value of n :- ";
    cin>>n;
    int m;
    cout<<"Enter the value of m :- ";
    cin>>m;
    cout<<"Subtraction of n - m = "<<sub(n,m)<<endl;
    cout<<"============================"<<endl;


    cout<<endl;
    cout<<"============================"<<endl;
    int p;
    cout<<"Enter the value of p :- ";
    cin>>p;
    int q;
    cout<<"Enter the value of q :- ";
    cin>>q;
    cout<<"Division of p - q = "<<division(p,q)<<endl;
    cout<<"============================"<<endl;



    /*
     int n;
    cin>>n;

    int countn=0;

    while(n>0){
        countn++;
        n=n/10;
    }
    cout<<countn<<endl;

    /*int n , m;
    cin>>n>>m;

    int i,j;
     for(i=1;i<=n;i++){
        for(j=1;j<=m;j++){
            if((i+j)%2==0){
                cout<<" 1 ";
            }
            else{
                cout<<" 2 ";
            }
        }
        cout<<endl;
     }


/*


    int n;
    cin>>n;

    int i , j;

    for(i=1;i<=n;i++)
    {
        for(j=1;j<=n;j++){

                if(i==1||j==1||i==n||j==n){
                    cout<<"
                    "<<j;
                }
                else{
                    cout<<"   ";
                }

        }
        cout<<endl;
    }


    char i,j;

    for(i=65;i<=90;i++)
    {
        for(j=65;j<=90;j++)
        {
            cout<<"  "<<j;
        }
        cout<<endl;
    }*/


   /* int n;
    cin>>n;


    int i,j;

      for(i=1;i<=n;i++){

        for(j=i;j<=n;j++){
            cout<<" "<<j;
        }
            for(int j=1;j<=(i-1);j++){
                cout<<" "<<j;
            }
        cout<<endl;
      }


    /*int n;
    cin>>n;

    int i , j;
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=i;j++)
        {
            cout<<" * ";
        }
        cout<<endl;
    }

   /* int n,m;
    cin>>n;
    cin>>m;
 int i , j;
    for(i = 1;i <= n; i++)
    {
        for(j = 1; j<= m; j++)
        {
            if(i==1||j==1||i==n||j==m||)
            {
                cout<<" * ";
            }
            else
            {
                cout<<"   ";
            }

        }
        cout<<endl;
    }



    /*int n,m;
    cout<<"Enetr the value of n";
    cin>>n;
    cout<<"Enetr the value of m";
    cin>>m;

       int i,j;

       for(i=1;i<=n;i++)
       {
           for(j=1;j<=m;j++)
           {
               cout<<" * ";
           }
           cout<<endl;
       }

   /*int i=0;
   while(i < 4){
    cout<<i<<" ";
    i++;
   }




    int i = 1;
    for(i=1;i<=50;i++){
        if(i %3==0){
            continue;
        }
        cout<<i<<",";
    }







    /*int i = 1;
    for(i=1;i<=10;i++){
        if(i==5){
            continue;
        }
        else if(i==6){
            continue;
        }
        else if(i==4){
                cout<<"  ";

        }
        if(i==8){
            break;
        }
        cout<<i;
    }








    /*int n , i;
    cout<<"Enter the number...";
    cin>>n;

        for(i = 0;i<= n;i++)
        {
            cout<<i;

        }
    //CONDITIONS IN C++//


    int age;
    cout<<"Enter your age ...";
    cin>>age;

         if(age <= 12)
         {
             cout<<"YOU ARE IN CHILDHOOD STAGE...";
         }
         else if(age >= 18)
         {

             cout<<"YOU ARE IN ADULT ATAGE...";
         }
         else
         {

             cout<<"YOU ARE IN TEEN-AGE ATAGE...";
         }



    int marks;
    cout<<"Enter your marks ..."<<endl;
    cin>>marks;

        if(marks >= 33)
        {
            cout<<"YOU ARE QUALIFIED IN YOUR EXAMINATION...";
        }
        else
        {

            cout<<"YOU ARE UNQUALIFIED IN YOUR EXAMINATION...";
        }



    //SIZEOF OPEARTOR//

    //cout<<"size of x :- "<<sizeof(x)<<endl;

    //cout<<(x&y)<<endl;
   // cout<<(x|y)<<endl;


    //cout<<(x^y)<<endl;


    //cout<<(x << 1)<<endl;
    //cout<<(x >> 1)<<endl;



    //ASSIGNMENT OPEARTOR//
    /*x += 2;
    cout<<x<<endl;

    y -= 2;
    cout<<y<<endl;

    x *= 2;
    cout<<x<<endl;



    //LOGICAL OPEARTOR//
    /*cout<<(x&&y)<<endl;//1
    cout<<(x||y)<<endl;//1


    bool a = true;
    cout<<!x<<endl;//0



    //[relational operator]//


    /*cout<<(x == y)<<endl;
    cout<<(x > y)<<endl;
    cout<<(x < y)<<endl;

    cout<<(x <= y)<<endl;
    cout<<(x <= y)<<endl



    cout<<x+y<<endl;//30
    cout<<x-y<<endl;//10
    cout<<x*y<<endl;//200
    cout<<x/y<<endl<<endl;//2



    int a =10;
    a++;
    a++;
    cout<<a<<endl;

    int b =10;
    b--;
    b--;
    cout<<b<<endl;

*/

    /*int age;
    cout<<"Enter your age...";
    cin>>age;

      if(age <= 12)
      {
           if(age <= 5)
          {
              cout<<"you are a infant state...";
          }

          cout<<"you are a child...";
      }
      else if(age >= 18)
      {

          cout<<"you are a adult...";

      }
      else
      {
          cout<<"you are a teenager...";
      }


 return 0;
}*/
