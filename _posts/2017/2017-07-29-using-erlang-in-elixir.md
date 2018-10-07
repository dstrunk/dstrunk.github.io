---
title: Using Erlang in Elixir
tags: [elixir, erlang]
category: Elixir
description: A quick demonstration of using a native Erlang library in Elixir.
---

Erlang is a first-class citizen of Elixir. This isn't a surprise; Elixir compiles down to BEAM, Erlang's VM, which means we get to leverage the power of Erlang for free.

We can see this functionality demonstrated in translating an Erlang library function into Elixir code. First, a look at the Erlang version:

```erlang
client() ->
    SomeHostInNet = "localhost", % to make it runnable on one machine
    {ok, Sock} = gen_tcp:connect(SomeHostInNet, 5678, 
                                 [binary, {packet, 0}]),
    ok = gen_tcp:send(Sock, "Some Data"),
    ok = gen_tcp:close(Sock).
```


Probably most important to note is the syntax for calling an Erlang library in Elixir: `:gen_tcp` (note the colon). This lets Elixir's compiler know that a call to a native Erlang libary will be performed. Now, in Erlang:

- **Functions are indented until the end of the call**. Functions in Elixir are wrapped in a `def <functon> do, end` block.
- **Multiline functions have commas, and the end of the function is terminated with a dot**. Elixir doesn't need any of these. Note that this is simplified for our example, but [this Stack Overflow question][stack-overflow] has a good explanation of when to use semicolons, commas or periods in Erlang.
- **Variables are capitalized**. Elixir variables are lowercase and snake case, so `SomeHostInNet` becomes `some_host_in_net`.
- **Comments start with a %**. In Elixir comments use `#`
- **Tuples look the same in Erlang vs Elixir**. But looking at the first tuple in our Erlang function `{ok, Sock}`, `ok` is a symbol. In Elixir we prefix symbols with a colon, so `ok` becomes `:ok`. Note that the variable `Sock` will again become lowercased `sock`.
- **Library methods are called with the colon, e.g. `gen_tcp:connect`**. In Elixir methods are called with the dot, or `:gen_tcp.connect`.

[stack-overflow]: https://stackoverflow.com/questions/1110601/in-erlang-when-do-i-use-or-or

After converting the above, here is the Elixir implementation:

```elixir
def client do
  some_host_in_net = "localhost" # to make it runnable on one machine
  {:ok, sock} = :gen_tcp.connect(some_host_in_net, 5678, [binary, {packet, 0}])
  :ok = :gen_tcp.send(sock, "Hello, World!")
  :ok = :gen_tcp.close(sock)
end
```

Once you understand some of the nuances of Erlang's syntax, you can see that it's a relatively straightforward exercise to convert methods between the two.
