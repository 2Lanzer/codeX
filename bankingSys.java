import java.util.ArrayList;
import java.util.Scanner;

class Account {
    private String userName;
    private String userPass;
    private double balance;

    // Constructor
    public Account(String userName, String userPass) {
        this.userName = userName;
        this.userPass = userPass;
        this.balance = 0.0;
    }

    // Getters
    public String getUserName() {
        return userName;
    }

    public boolean checkPassword(String pass) {
        return this.userPass.equals(pass);
    }

    public double getBalance() {
        return balance;
    }

    // Account Operations
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: " + amount);
        } else {
            System.out.println("Invalid deposit amount.");
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount);
        } else {
            System.out.println("Invalid withdrawal amount or insufficient balance.");
        }
    }
}

public class bankingSys {
    Scanner sc = new Scanner(System.in);
    ArrayList<Account> accounts = new ArrayList<>();

    // Create Account
    public void createAcct() {
        System.out.print("Create username: ");
        String userName = sc.next();

        String userPass;
        String confirmPass;
        do {
            System.out.print("Enter password: ");
            userPass = sc.next();

            System.out.print("Re-enter password: ");
            confirmPass = sc.next();

            if (!userPass.equals(confirmPass)) {
                System.out.println("Passwords do not match. Try again.");
            }
        } while (!userPass.equals(confirmPass));

        accounts.add(new Account(userName, userPass));
        System.out.println("Account created successfully!");
    }

    // Login and Main Menu
    public void login() {
        System.out.print("Enter username: ");
        String userName = sc.next();
        System.out.print("Enter password: ");
        String userPass = sc.next();

        for (Account acct : accounts) {
            if (acct.getUserName().equals(userName) && acct.checkPassword(userPass)) {
                System.out.println("Login successful! Welcome, " + userName);
                mainMenu(acct);
                return;
            }
        }
        System.out.println("Invalid username or password.");
    }

    // Main Menu for Account Operations
    public void mainMenu(Account acct) {
        int choice;
        do {
            System.out.println("\n--- Main Menu ---");
            System.out.println("1. Check Balance");
            System.out.println("2. Deposit");
            System.out.println("3. Withdraw");
            System.out.println("4. Logout");
            System.out.print("Choose an option: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.println("Current Balance: " + acct.getBalance());
                    break;
                case 2:
                    System.out.print("Enter amount to deposit: ");
                    double depositAmount = sc.nextDouble();
                    acct.deposit(depositAmount);
                    break;
                case 3:
                    System.out.print("Enter amount to withdraw: ");
                    double withdrawAmount = sc.nextDouble();
                    acct.withdraw(withdrawAmount);
                    break;
                case 4:
                    System.out.println("Logged out successfully.");
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        } while (choice != 4);
    }

    public static void main(String[] args) {
        bankingSys bank = new bankingSys();
        Scanner sc = new Scanner(System.in);
        int choice;

        do {
            System.out.println("\n--- Welcome to Simple Banking System ---");
            System.out.println("1. Create Account");
            System.out.println("2. Login");
            System.out.println("3. Exit");
            System.out.print("Choose an option: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    bank.createAcct();
                    break;
                case 2:
                    bank.login();
                    break;
                case 3:
                    System.out.println("Thank you for using the banking system. Goodbye!");
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        } while (choice != 3);

        sc.close();
    }
}