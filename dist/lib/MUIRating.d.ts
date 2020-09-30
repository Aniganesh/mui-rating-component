import React from 'react';
import { RatingProps } from '@material-ui/lab';
export interface IMUIRating extends RatingProps {
    icons?: JSX.Element[];
    labels?: string[];
    description?: string;
    onRate?: (rating: number | null) => any;
}
export declare const MUIRating: React.FC<IMUIRating>;
