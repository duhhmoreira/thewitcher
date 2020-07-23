interface IAppState {
  pageToken?: string,
  isAuthenticated?: boolean,
  isLoading?: boolean,
  userEmail?: string,
  selectedVideo?: string
  videos?: List<Object>
}

interface IHomeProps {
    state: IAppState,
    setState: Dispatch<SetStateAction<IAppState>>
}

interface ILoginProps {
    state: IAppState,
    setState: Dispatch<SetStateAction<IAppState>>
}

interface IVideoItem {
    video: Object<any>,
    handleVideoSelect: Dispatch<SetStateAction<IAppState>>
}


interface IVideoList {
    state: PropsWithChildren<IAppState>,
    setState: Dispatch<SetStateAction<IAppState>>,
    handleVideoSelect: Dispatch<SetStateAction<IAppState>>
}

interface IVideoDisplay {
    state: Object<any>,
    setState: Dispatch<SetStateAction<IAppState>>
}