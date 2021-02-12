%{
 int counter = 0;
%}

%%

[0-9]*[13579]+	{}
[0-9]*[02468]+	{ counter++; }
\n		{}
.		{}

%%

int main()
{
 yylex();
 printf("%d\n", counter);
 return 0;
}
