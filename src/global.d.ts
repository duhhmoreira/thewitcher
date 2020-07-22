interface IAppState {
  offsetList?: number,
  isAuthenticated?: boolean,
  isLoading?: boolean,
  userEmail?: string,
  selectedVideo?: string
  videos?: List<Object>
}

interface IHomeProps {
  mainState: {
    state: Object,
    setState: Dispatch<SetStateAction<IAppState>>
  }
}

interface ILoginProps {
  mainState: {
    state: Object,
    setState: Dispatch<SetStateAction<IAppState>>
  }
}

interface IVideoItem {
  mainState:{
    state: Object,
    handleVideoSelect: Dispatch<SetStateAction<IAppState>>
  }
}


interface IVideoList {
  mainState:{
    state: Object,
    handleVideoSelect: Dispatch<SetStateAction<IAppState>>
  }
}