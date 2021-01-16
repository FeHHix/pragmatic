import qs from 'qs';

export function json2qs(obj: any): string {
    return qs.stringify(obj, {allowDots: true});
}
