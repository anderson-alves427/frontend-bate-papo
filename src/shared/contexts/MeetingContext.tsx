import { createContext, useContext, useState } from "react";
import { IDataMeeting } from "./interfaces/dataMeetingInterface";

interface IMeetingContextDate {
    dataMeeting: IDataMeeting,
    setDataMeeting: (newDrawerOptions: IDataMeeting) => void;
}

interface IAppMeetingProviderProps {
    children: React.ReactNode;
}
const MeetingContext = createContext({} as IMeetingContextDate);

export const useAppMeetingContext = () => {
    return useContext(MeetingContext);
}

export const MeetingProvider: React.FC<IAppMeetingProviderProps> = ({ children }) => {
    const [dataMeeting, setDataMeeting] = useState({} as IDataMeeting);

    return (
        <MeetingContext.Provider
            value={{dataMeeting, setDataMeeting}}
        >
            {children}
        </MeetingContext.Provider>
    );
}