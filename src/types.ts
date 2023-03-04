

export interface ClockType {
    name: string;
    descr: string;
    max: number;
    last_recorded_value: number;
    value: number;
    max_resolve: string;
    min_resolve: string;
    visible: string[];
    is_up_to_date: boolean;
    alignment: 'hostile' | 'friendly' | 'neutral';
}