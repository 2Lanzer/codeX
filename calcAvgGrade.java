import java.util.Scanner;

// Class to handle grade calculation
public class calcAvgGrade {
    // Function to calculate average score
    public double calculateAverage(int[] scores) {
        int total = 0;
        
        // Loop to sum all scores
        for (int score : scores) {
            total += score;
        }
        
        // Calculate and return the average
        return (double) total / scores.length;
    }

    // Function to determine grade based on average
    public String determineGrade(double average) {
        // Conditions to check grade range
        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else {
            return "F";
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter the number of subjects: ");
        int numSubjects = scanner.nextInt();
        
        // Condition to check if the number of subjects is valid
        if (numSubjects <= 0) {
            System.out.println("Invalid input! Number of subjects should be greater than 0.");
            return;
        }
        
        int[] scores = new int[numSubjects];
        
        // Loop to get scores for each subject
        for (int i = 0; i < numSubjects; i++) {
            System.out.print("Enter score for subject " + (i + 1) + ": ");
            scores[i] = scanner.nextInt();
            
            // Condition to check if the score is valid
            if (scores[i] < 0 || scores[i] > 100) {
                System.out.println("Invalid input! Score should be between 0 and 100.");
                return;
            }
        }
        
        // Create an object of the class to use its methods
        calcAvgGrade calculator = new calcAvgGrade();
        
        // Calculate average and determine grade
        double average = calculator.calculateAverage(scores);
        String grade = calculator.determineGrade(average);
        
        // Display result
        System.out.println("Average Score: " + average);
        System.out.println("Grade: " + grade);
        
        scanner.close();
    }
}
