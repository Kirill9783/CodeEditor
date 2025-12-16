export function formatDuration (seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingMinutes = seconds % 60;

    return `${minutes}:${remainingMinutes.toString().padStart(2, "0")}`;
}