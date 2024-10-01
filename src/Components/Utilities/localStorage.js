const getSavedData = () => {
  const savedData = localStorage.getItem('aplied_job');
  if(savedData){
    return JSON.parse(savedData);
  }
  return [];
}

const getApliedJobId = (id) => {
  const saveData = getSavedData() || [];
  const exists = saveData.find(itemId => itemId === id);
  if(!exists){
    saveData.push(id);
    localStorage.setItem('aplied_job',JSON.stringify(saveData));
    return false;
  }
  return true;
}

export { getApliedJobId,getSavedData };