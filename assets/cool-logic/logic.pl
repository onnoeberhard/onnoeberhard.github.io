:- use_module(library(clpfd)).

ahead(1).
back(2).
wine(3).
poison(4).

hermione :-
    Flasks = [First, SecondLeft, _, _, _, SecondRight, Last],
    Sizes = [_, _, Dwarf, _, _, Giant, _],    % Taken from the picture, not mentioned in book.
    Flasks ins 1..4,
    Flasks = Sizes,
    First #\= Last,                           % Different are those who stand at either end,
    First #\= 1,                              % But if you would move onward,
    Last #\= 1,                               % neither is your friend;
    Dwarf #\= 4,                              % Neither dwarf-
    Giant #\= 4,                              % nor giant holds death in their insides; 
    SecondLeft #= SecondRight,                % The second left and the second on the right are twins ..
    labeling([], Flasks),
    count(Flasks, 1, 1),                      % One among us seven will let you move ahead,
    count(Flasks, 2, 1),                      % Another will transport the drinker back instead, 
    count(Flasks, 3, 2),                      % Two among our number hold only nettle wine,
    count(Flasks, 4, 3),                      % Three of us are killers, waiting hidden in line. (actually implied)
    poison_left_of_wine(Flasks),              % However slyly the poison tries to hide, you will always find some on nettle wine’s left side;
    write_names(Flasks), !.

% Predicate for checking if the estimate contains the correct number of each substance
count(L, X, N) :-
    findall(P, (member(P, L), P = X), CP),
    length(CP, N).

% Predicates for checking if there is always poison on "nettle wine's left side"
poison_left_of_wine([_]).
poison_left_of_wine([H|T]) :-
    poison_left_of_wine(T),
    T = [X|_],
    poison_left_of_wine(H, X).
poison_left_of_wine(_, W) :-
    not(wine(W)).
poison_left_of_wine(P, _) :-
    poison(P).

% Predicates for writing out the result
write_names([]).
write_names([H|T]) :-
    (ahead(H), write("Ahead Potion");
    back(H), write("Back Potion");
    wine(H), write("Nettle Wine");
    poison(H), write("Poison")),
    comma(T),
    write_names(T), !.
comma([]) :- !.
comma(_) :- write(", ").
