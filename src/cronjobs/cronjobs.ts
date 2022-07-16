import cron from "node-cron";
import drawGraph from "../piGraph";
const cronjobs = () => {
	drawGraph();
	cron.schedule('0 * * * *', () => {
		drawGraph();
	});
}
export default cronjobs;