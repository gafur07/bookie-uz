export const formatTime = (time: number): string => {
	const minutes = Math.floor(time / 60);
	const seconds = Math.floor(time % 60);
	return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export const formatPrice = (value: number): string => {
	if (!value) return "0";
	return Intl.NumberFormat("ru-RU").format(value);
}