import React, { useEffect, useState } from 'react';
import { getResearchList } from '../../services/research';
import ResearchNoContent from './research-no-content';
import ResearchWeighty from './research-weighty';

const Research = () => {
    const [researchList, setResearchList] = useState([]);
    useEffect(() => {
        async function reqResearchList() {
            const res = await getResearchList();
            setResearchList(res.data);
        }
        reqResearchList();
    }, []);

    return <ResearchWeighty data={researchList} />;

    // {
    //         /* <ResearchNoContent /> */
    //         /* {researchList.length > 0 ? <ResearchWeighty data={researchList}/> : <ResearchNoContent />} */
    //     // }
    // };
};

export default Research;