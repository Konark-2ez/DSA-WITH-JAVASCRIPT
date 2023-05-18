//Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
int reverse(int x){
    int temp = 0;
    while(x){
         if(temp<(INT_MIN)/10 || temp>(INT_MAX)/10){
        return 0;
    }
    
        int rem = x%10;
        temp = (temp*10)+rem;
        x = x/10;
    }
   
         return temp;
    
   
}