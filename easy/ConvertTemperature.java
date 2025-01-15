public class ConvertTemperature {
    public static  double[] convertTemperature(double celsius) {
        
        double[] temperatures = new double[2];

        temperatures[0] = celsius + 273.15;
        temperatures[1] = celsius * 1.8 + 32.00;
        
        return temperatures;
    }

    public static void main(String[] args) {
        convertTemperature(5);
    }
}
