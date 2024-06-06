function updateProgressBars() {
  const now = new Date();
  // const yearProgress = (now.getTime() / new Date(now.getFullYear(), 0, 1).getTime()) * 100;
  const yearStart = new Date(now.getFullYear(), 0, 1, 0, 0, 0).getTime();
  const yearEnd = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0).getTime();
  const yearProgress = ((now.getTime() - yearStart) / (yearEnd - yearStart)) * 100;
  // 计算本月已过百分比
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0).getTime();
  const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0).getTime();
  const monthProgress = ((now.getTime() - monthStart) / (monthEnd - monthStart)) * 100;
  
  // 计算本天已过百分比
  const dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0).getTime();
  const dayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0).getTime();
  const dayProgress = ((now.getTime() - dayStart) / (dayEnd - dayStart)) * 100;
  
  // 计算已过小时百分比
  const hourStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), 0, 0).getTime();
  const hourEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1, 0, 0).getTime();
  const hourProgress = ((now.getTime() - hourStart) / (hourEnd - hourStart)) * 100;


  const minuteProgress = (now.getSeconds() / 60) * 100;

  document.getElementById('year-progress').textContent = yearProgress.toFixed(5) + '%';
  document.getElementById('year-progress-bar').style.width = yearProgress.toFixed(5) + '%';

  document.getElementById('month-progress').textContent = monthProgress.toFixed(5) + '%';
  document.getElementById('month-progress-bar').style.width = monthProgress.toFixed(5) + '%';

  document.getElementById('day-progress').textContent = dayProgress.toFixed(5) + '%';
  document.getElementById('day-progress-bar').style.width = dayProgress.toFixed(5) + '%';

  document.getElementById('hour-progress').textContent = hourProgress.toFixed(5) + '%';
  document.getElementById('hour-progress-bar').style.width = hourProgress.toFixed(5) + '%';

  document.getElementById('minute-progress').textContent = minuteProgress.toFixed(5) + '%';
  document.getElementById('minute-progress-bar').style.width = minuteProgress.toFixed(5) + '%';
}

setInterval(updateProgressBars, 1000);