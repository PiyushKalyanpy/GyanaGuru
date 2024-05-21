import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function calculateVideoDuration(file: any) {
  if (file) {
    const video = document.createElement("video");
    video.src = URL.createObjectURL(file);
    return new Promise((resolve) => {
      video.addEventListener("loadedmetadata", () => {
        resolve(secondsToTime(video.duration));
        URL.revokeObjectURL(video.src);
      });
    });
  }
}

function secondsToTime(seconds: number) {
  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds % 3600) / 60);
  var remainingSeconds = Math.floor(seconds % 60);

  var timeString = "";

  if (hours > 0) {
    timeString += (hours < 10 ? "0" : "") + hours + ":";
  }

  timeString +=
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (remainingSeconds < 10 ? "0" : "") +
    remainingSeconds;

  return timeString;
}
