import java.util.Scanner;
class checkEvenOrOdd {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        
        if (sc.hasNextDouble()) {
            double num = sc.nextDouble();
            
            // Check if it's a whole number by comparing it to its integer cast
            if (num == (int) num) {
                int isInt = (int) num;
                if (isInt % 2 == 0) {
                    System.out.print(isInt + " is an even number.");
                } else {
                    System.out.print(isInt + " is an odd number.");
                }
            } else {
                System.out.print("Not a whole number!");
            }
        } else {
            System.out.print("Invalid input! Please enter a number.");
        }
        
        sc.close(); // Close the scanner to avoid resource leak
    }
}
