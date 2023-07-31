#include<iostream>
using namespace std;

int main()
{

    int n;
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

















    /*for(i=1;i<=n;i++){
            for(j=1;j<=(n-i);j++){
                cout<<"   ";
            }
            for(j=1;j<=(2*i-1);j++){
                cout<<" * ";
            }
            cout<<endl;
    }



    /*int m;
    //cin>>m;
    /*int i;
    cin>>i;
    int j;

    for(i=i;i>=0;i--){
            for(j=0;j<=i;j++){
                cout<<"*";
            }
        cout<<endl;
    }

     /*for(i=1;i<=n;i++){
        for(j=1;j<=m;j++){
                if(i==1||j==1||i==n||j==m)
                {

                    cout<<"*";
                }
                 else if(i==5||j==10||i==n||j==m)
                {

                    cout<<"*";
                }
                else{
                    cout<<" ";
                }

        }
        cout<<endl;
    }


     /*int i,j;
    for(i=1;i<=n;i++){ //row//
        for(j=1;j<=m;j++){ //coloum//
            cout<<" * ";
        }
        cout<<endl;
    }
                 /* *  *  *  *  *  *
                    *  *  *  *  *  *
                    *  *  *  *  *  *
                    *  *  *  *  *  *
                    *  *  *  *  *  * */


//DO WHILE LOOP//
   /*int n;
   cin>>n;

   int i;
   for(i=1;i<=10;i++){
    if(i==5){
            cout<<"__";
        continue;
    }
    cout<<" well ";

   }




//FOR LOOP IN C++//
    /*int n;
    cin>>n;

    int sum = 0;

    int i;

    for(i=1;i<=n;i++){
        sum+=i;

    }
    cout<<sum<<endl;




//WHILE LOOP IN C++//

    /*int n;
    cin>>n;

    int sum = 0;
    int i = 1;
    while(i <= n)
    {
        sum +=i;
        //cout<<i;
        i++;


    }
    cout<<sum<<endl;*/



    return 0;

}
