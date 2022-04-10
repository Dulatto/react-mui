import './App.css';
import { createTheme, colors, ThemeProvider } from '@mui/material'
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { MuiAlert } from './components/MuiAlert';
import { MuiDialog } from './components/MuiDialog';
import { MuiLoadingButton } from './components/MuiLoadingButton';
import { MuiProgress } from './components/MuiProgress';
import { MuiSkeleton } from './components/MuiSkeleton';
import { MuiSnackbar } from './components/MuiSnackbar';
import { MuiPicker } from './components/MuiPicker';
import { MuiDatePangePicker } from './components/MuiDatePangePicker';
import { MuiTabs } from './components/MuiTabs';
import { MuiTimeline } from './components/MuiTimeline';
import { MuiMasonry } from './components/MuiMasonry';
import { MuiResponsiveness } from './components/MuiResponsiveness';
// import { MuiChip } from './components/MuiChip';
// import { MuiList } from './components/MuiList';
// import { MuiTable } from './components/MuiTable';
// import { MuiTooltip } from './components/MuiTooltip';
//import { MuiAvatar } from './components/MuiAvatar';
//import { MuiBadge } from './components/MuiBadge';
//import { MuiBottomNavigation } from './components/MuiBottomNavigation';
//import { MuiBreadcrumbs } from './components/MuiBreadcrumbs';
//import { MuiDrawer } from './components/MuiDrawer';
//import { MuiLink } from './components/MuiLink';
//import { MuiAccordion } from './components/MuiAccordion';
//import { MuiImageList } from './components/MuiImageList';
//import { MuiNavbar } from './components/MuiNavbar';
//import MuiSpeedDial from './components/MuiSpeedDial';
//import { MuiCard } from './components/MuiCard';
//import { MuiAutocomplete } from './components/MuiAutocomplete';
//import { MuiLayout } from './components/MuiLayout';
//import { MuiRating } from './components/MuiRating';
//import { MuiCheckbox } from './components/MuiCheckbox';
//import { MuiSwitch } from './components/MuiSwitch';
//import { MuiRadioButton } from './components/MuiRadioButton';
//import { MuiSelect } from './components/MuiSelect';
//import { MuiButton } from './components/MuiButton';
//import { MuiTextField } from './components/MuiTextField';
//import { MuiTypography } from './components/MuiTypography';

const theme = createTheme({
  palette: {
    secondary:{
      main: colors.orange[500],
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className="App">
     {/* <MuiTypography /> 
     <MuiButton/>
     <MuiTextField />
     <MuiSelect />
     <MuiRadioButton />
     <MuiCheckbox />
     <MuiSwitch />
     <MuiRating />
     <MuiAutocomplete />
     <MuiLayout />
     <MuiCard />
     <MuiAccordion />
     <MuiImageList />
       <MuiLink />
     <MuiNavbar />
   <MuiBreadcrumbs />
   <MuiDrawer />
   <MuiSpeedDial />
   <MuiBottomNavigation />
   <MuiAvatar />
   <MuiBadge />
   <MuiList />
   <MuiChip />
   <MuiTooltip />
   <MuiTable />
   <MuiAlert />
   <MuiSnackbar />
   <MuiDialog />
   <MuiProgress />
   <MuiSkeleton />
   <MuiLoadingButton />
   <MuiPicker />
   <MuiDatePangePicker />
   <MuiTabs />
   <MuiTimeline />
   <MuiMasonry />*/}
   <MuiResponsiveness />
    </div>
    </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
