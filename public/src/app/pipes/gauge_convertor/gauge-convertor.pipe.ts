import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'gaugeConvertor'
})
export class GaugeConvertorPipe implements PipeTransform {
	transform(value: any): any {
		let min_value = 502,
      		max_value = 150,
      		difference = max_value - min_value,
      		final_value = ((difference * (100 - value)) / 100);
      		final_value = max_value - final_value;

		return final_value;
	}
}
