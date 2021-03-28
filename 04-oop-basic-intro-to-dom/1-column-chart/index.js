export default class ColumnChart {

  dataColumns = {};
  chartHeight = 50;

  generateLink() {
    return this.link ? `<a class="column-chart__link" href="${this.link}">View all</a>` : '';
  }

  generateDataColumns(data) {
    const maxValue = Math.max(...data);
    const scale = this.chartHeight / maxValue;
    return data.map(item => {
      const percentValue = Math.round(item / maxValue * 100);
      return `<div style="--value: ${Math.floor(item * scale)}" data-tooltip="${percentValue}%"></div>`;
    }).join('');
  }

  generateTemplate() {
    return `
    <div class="column-chart ${this.data.length ? '' : 'column-chart_loading'}" style="--chart-height: 50">
      <div class="column-chart__title">
        Total ${this.label}
        ${this.generateLink()}
      </div>
      <div class="column-chart__container">
        <div data-element="header" class="column-chart__header">
          ${this.value}
        </div>
        <div data-element="body" class="column-chart__chart">
          ${this.generateDataColumns(this.data)}
        </div>
      </div>
    </div>
    `;
  }

  render() {
    const element = document.createElement('div');

    element.innerHTML = this.generateTemplate();

    this.dataColumns = element.querySelectorAll('div[data-element="body"]')[0];

    this.element = element.firstElementChild;
  }

  constructor({
    data = [],
    label = '',
    value = 0,
    link = ''
  } = {}) {
    this.data = data;
    this.label = String(label);
    this.link = String(link);
    this.value = value;

    return this.render();
  }

  update(data) {
    this.dataColumns.innerHTML = this.generateDataColumns(data);
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
  }
}
