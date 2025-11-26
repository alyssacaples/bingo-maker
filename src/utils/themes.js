export const themes = [
  {
    id: 'christmas',
    name: 'Christmas',
    titleFont: 'Helvetica-Bold',
    titleColor: '#C8102E',
    cellFont: 'Helvetica',
    useGradient: true,
    gradientColor1: '#FFFFFF',
    gradientColor2: '#DC143C',
    backgroundColor: '#FFFFFF',
    borderColor: '#C8102E',
    freeSpaceBackgroundColor: '#FFE4E1',
    freeSpaceFontColor: '#C8102E'
  },
  {
    id: 'thanksgiving',
    name: 'Thanksgiving',
    titleFont: 'Helvetica-Bold',
    titleColor: '#8B4513',
    cellFont: 'Helvetica',
    useGradient: true,
    gradientColor1: '#FFF8DC',
    gradientColor2: '#FF8C00',
    backgroundColor: '#FFF8DC',
    borderColor: '#8B4513',
    freeSpaceBackgroundColor: '#FFE4B5',
    freeSpaceFontColor: '#8B4513'
  },
  {
    id: 'school',
    name: 'School',
    titleFont: 'Helvetica-Bold',
    titleColor: '#1E3A8A',
    cellFont: 'Times-Roman',
    useGradient: true,
    gradientColor1: '#FFFFFF',
    gradientColor2: '#FCD34D',
    backgroundColor: '#FFFFFF',
    borderColor: '#1E3A8A',
    freeSpaceBackgroundColor: '#DBEAFE',
    freeSpaceFontColor: '#1E3A8A'
  },
  {
    id: 'princess',
    name: 'Princess',
    titleFont: 'Helvetica-Bold',
    titleColor: '#C71585',
    cellFont: 'Helvetica',
    useGradient: true,
    gradientColor1: '#FFE4E1',
    gradientColor2: '#DA70D6',
    backgroundColor: '#FFE4E1',
    borderColor: '#C71585',
    freeSpaceBackgroundColor: '#FCE7F3',
    freeSpaceFontColor: '#C71585'
  },
  {
    id: 'snowflake',
    name: 'Snowflake',
    titleFont: 'Helvetica-Bold',
    titleColor: '#4682B4',
    cellFont: 'Helvetica',
    useGradient: true,
    gradientColor1: '#F0F8FF',
    gradientColor2: '#87CEEB',
    backgroundColor: '#F0F8FF',
    borderColor: '#4682B4',
    freeSpaceBackgroundColor: '#E0F6FF',
    freeSpaceFontColor: '#4682B4'
  },
  {
    id: 'hearts',
    name: 'Hearts',
    titleFont: 'Helvetica-Bold',
    titleColor: '#DC143C',
    cellFont: 'Helvetica',
    useGradient: true,
    gradientColor1: '#FFB6C1',
    gradientColor2: '#FF69B4',
    backgroundColor: '#FFB6C1',
    borderColor: '#DC143C',
    freeSpaceBackgroundColor: '#FFE4E1',
    freeSpaceFontColor: '#DC143C'
  },
  {
    id: 'ocean',
    name: 'Ocean',
    titleFont: 'Helvetica-Bold',
    titleColor: '#000080',
    cellFont: 'Helvetica',
    useGradient: true,
    gradientColor1: '#E0F6FF',
    gradientColor2: '#00CED1',
    backgroundColor: '#E0F6FF',
    borderColor: '#000080',
    freeSpaceBackgroundColor: '#B0E0E6',
    freeSpaceFontColor: '#000080'
  },
  {
    id: 'sunset',
    name: 'Sunset',
    titleFont: 'Helvetica-Bold',
    titleColor: '#FF4500',
    cellFont: 'Helvetica',
    useGradient: true,
    gradientColor1: '#FFE4B5',
    gradientColor2: '#FF6347',
    backgroundColor: '#FFE4B5',
    borderColor: '#FF4500',
    freeSpaceBackgroundColor: '#FFDAB9',
    freeSpaceFontColor: '#FF4500'
  },
  {
    id: 'forest',
    name: 'Forest',
    titleFont: 'Helvetica-Bold',
    titleColor: '#228B22',
    cellFont: 'Helvetica',
    useGradient: true,
    gradientColor1: '#F0FFF0',
    gradientColor2: '#8FBC8F',
    backgroundColor: '#F0FFF0',
    borderColor: '#228B22',
    freeSpaceBackgroundColor: '#D4EDDA',
    freeSpaceFontColor: '#228B22'
  }
];

export const getThemeById = (id) => {
  return themes.find(theme => theme.id === id) || null;
};

export const applyTheme = (theme, setters) => {
  const {
    setTitleFont,
    setTitleColor,
    setCellFont,
    setBackgroundColor,
    setUseGradient,
    setGradientColor1,
    setGradientColor2,
    setBorderColor,
    setFreeSpaceBackgroundColor,
    setFreeSpaceFontColor
  } = setters;

  setTitleFont(theme.titleFont);
  setTitleColor(theme.titleColor);
  setCellFont(theme.cellFont);
  setBackgroundColor(theme.backgroundColor);
  setUseGradient(theme.useGradient);
  setGradientColor1(theme.gradientColor1);
  setGradientColor2(theme.gradientColor2);
  setBorderColor(theme.borderColor || '#1e40af');
  setFreeSpaceBackgroundColor(theme.freeSpaceBackgroundColor || '#dbeafe');
  setFreeSpaceFontColor(theme.freeSpaceFontColor || '#1e40af');
};

