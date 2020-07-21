interface IAppState {
  offsetList?: number,
  isAuthenticatad?: boolean,
  isLoading?: boolean,
  userEmail?: string,
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