function distanceTraveled(mainTank: number, additionalTank: number): number {
    let totalFuelUsed: number = 0;
    let fiveLitersCounter = 0;

    while (mainTank) {
        totalFuelUsed++;
        mainTank--;
        fiveLitersCounter++;
        if (fiveLitersCounter === 5 && additionalTank > 0) {
            mainTank++;
            additionalTank--;
            fiveLitersCounter = 0;
        }
    }

    return totalFuelUsed * 10;
}
