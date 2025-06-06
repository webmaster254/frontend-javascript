interface MinorCredits {
    credits: number;
    readonly _brandMinor: void; // Brand property for nominal typing
}

interface MajorCredits {
    credits: number;
    readonly _brandMajor: void; // Brand property for nominal typing
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return { credits: subject1.credits + subject2.credits } as MinorCredits;
}