export default function convertToPGN(moves: { from: { x: number; y: number }; to: { x: number; y: number }; captured?: boolean }[]): string {
    const pieceSymbols: Record<string, string> = {
        'pawn': '',
        'rook': 'R',
        'knight': 'N',
        'bishop': 'B',
        'queen': 'Q',
        'king': 'K',
    };

    let pgn = '';
    moves.forEach((move, index) => {
        const from = move.from;
        const to = move.to;

        // Convertir les coordonnées en notation échiquéenne
        const fromSquare = String.fromCharCode(97 + from.x) + (8 - from.y);
        const toSquare = String.fromCharCode(97 + to.x) + (8 - to.y);

        // Ajouter le coup à la notation PGN
        const piece = pieceSymbols['pawn'] || ''; // Pour les pions, on ne met rien
        const moveNotation = `${piece}${toSquare}`;

        // Ajouter un espace pour séparer les coups
        pgn += (index % 2 === 0 ? `${Math.floor(index / 2) + 1}. ` : '') + moveNotation + ' ';
    });

    return pgn.trim();
}