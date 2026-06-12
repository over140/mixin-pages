(function () {
  const shareItems = [
    {
      title: "分享文字",
      data: "dGVzdAo=",
      actions: [
        { label: "分享到当前会话", category: "text", target: "specified" },
        { label: "分享到指定会话", category: "text", target: "unspecified" }
      ]
    },
    {
      title: "分享图片",
      data: "eyJ1cmwiOiJodHRwczovL3Q4LmJhaWR1LmNvbS9pdC91XHUwMDNkMTQ4NDUwMDE4NiwxNTAzMDQzMDkzXHUwMDI2Zm1cdTAwM2Q3OVx1MDAyNmFwcFx1MDAzZDg2XHUwMDI2c2l6ZVx1MDAzZGgzMDBcdTAwMjZuXHUwMDNkMFx1MDAyNmdcdTAwM2Q0blx1MDAyNmZcdTAwM2RqcGVnP3NlY1x1MDAzZDE2MDA4NDM4MTBcdTAwMjZ0XHUwMDNkNTIxYjMzNzI0ODExOTdiNWY5ZDRiYjc1MDYxNWZmYWYifQ==",
      actions: [
        { label: "分享到当前会话", category: "image", target: "specified" },
        { label: "分享到指定会话", category: "image", target: "unspecified" }
      ]
    },
    {
      title: "分享卡片",
      data: "eyJhcHBfaWQiOiI3YzU4ZWNmOC1hMWY3LTQ0MGQtYTc4Zi0zYjhiNjM5MGUxZDUiLCJpY29uX3VybCI6Imh0dHBzOi8vb2hteXhpbi5vc3MtY24taG9uZ2tvbmcuYWxpeXVuY3MuY29tL3JlZF9wYWNrZXQucG5nIiwidGl0bGUiOiLmiJHkv6HnuqLljIUiLCJkZXNjcmlwdGlvbiI6IuadpeiHqiBLZXJuZWwiLCJhY3Rpb24iOiJodHRwczovL29obXkueGluL2NpcmNsZXMvNjA5MjE0My9yZWRfcGFja2V0cy83NjEzZGY2YS1lZGI5LTQ1ZjItOWYzNy05NTQ0OTM1MzE4NGQiLCJ1cGRhdGVkX2F0IjoiMjAyMC0wOC0wNlQyMjo0MTowNC4wNjg1ODkwOTVaIn0=",
      actions: [
        { label: "分享到当前会话", category: "app_card", target: "specified" },
        { label: "分享到指定会话", category: "app_card", target: "unspecified" }
      ]
    },
    {
      title: "分享卡片(Judy@DFS大丰收猪弟🐷)",
      data: "eyJhcHBfaWQiOiI3YzU4ZWNmOC1hMWY3LTQ0MGQtYTc4Zi0zYjhiNjM5MGUxZDUiLCJpY29uX3VybCI6Imh0dHBzOi8vb2hteXhpbi5vc3MtY24taG9uZ2tvbmcuYWxpeXVuY3MuY29tL3JlZF9wYWNrZXQucG5nIiwidGl0bGUiOiJKdWR5QERGU+Wkp+S4sOaUtueMquW8n/CfkLciLCJkZXNjcmlwdGlvbiI6IuadpeiHqiBLZXJuZWwiLCJhY3Rpb24iOiJodHRwczovL29obXkueGluL2NpcmNsZXMvNjA5MjE0My9yZWRfcGFja2V0cy83NjEzZGY2YS1lZGI5LTQ1ZjItOWYzNy05NTQ0OTM1MzE4NGQiLCJ1cGRhdGVkX2F0IjoiMjAyMC0wOC0wNlQyMjo0MTowNC4wNjg1ODkwOTVaIn0=",
      actions: [
        { label: "分享到当前会话", category: "app_card", target: "specified" },
        { label: "分享到指定会话", category: "app_card", target: "unspecified" }
      ]
    },
    {
      title: "分享联系人",
      data: "eyJ1c2VyX2lkIjoiNzczZTVlNzctNDEwNy00NWMyLWI2NDgtOGZjNzIyZWQ3N2Y1In0=",
      actions: [
        { label: "分享到当前会话", category: "contact", target: "specified" },
        { label: "分享到指定会话", category: "contact", target: "unspecified" }
      ]
    },
    {
      title: "分享文章",
      data: "IyBNaXhpbiBQb3N0CgotLS0tLS0tLS0tLS0tLS0tLS0tCgoKIyMgTWFya2Rvd27nroDku4sKCj4gTWFya2Rvd24g5piv5LiA56eN6L276YeP57qn5qCH6K6w6K%2Bt6KiA77yM5a6D5YWB6K645Lq65Lus5L2%2F55So5piT6K%2B75piT5YaZ55qE57qv5paH5pys5qC85byP57yW5YaZ5paH5qGj77yM54S25ZCO6L2s5o2i5oiQ5qC85byP5Liw5a%2BM55qESFRNTOmhtemdouOAgiAgICDigJTigJQgW%2Be7tOWfuueZvuenkV0oaHR0cHM6Ly96aC53aWtpcGVkaWEub3JnL3dpa2kvTWFya2Rvd24pCgrmraPlpoLmgqjlnKjpmIXor7vnmoTov5nku73mlofmoaPvvIzlroPkvb%2FnlKjnroDljZXnmoTnrKblj7fmoIfor4bkuI3lkIznmoTmoIfpopjvvIzlsIbmn5DkupvmloflrZfmoIforrDkuLoqKueyl%2BS9kyoq5oiW6ICFKuaWnOS9kyrvvIzliJvlu7rkuIDkuKpb6ZO%2B5o6lXShodHRwOi8vd3d3LmV4YW1wbGUuY29tKeaIluS4gOS4quiEmuazqFteZGVtb13jgILkuIvpnaLliJfkuoblh6DkuKrpq5jnuqflip%2Fog73vvIzmm7TlpJror63ms5Xor7fmjIlgQ3RybCArIC9g5p%2Bl55yL5biu5Yqp44CCIAoKIyMjIOS7o%2BeggeWdlwpgYGAgcHl0aG9uCkByZXF1aXJlc19hdXRob3JpemF0aW9uCmRlZiBzb21lZnVuYyhwYXJhbTE9JycsIHBhcmFtMj0wKToKICAgICcnJ0EgZG9jc3RyaW5nJycnCiAgICBpZiBwYXJhbTEgPiBwYXJhbTI6ICMgaW50ZXJlc3RpbmcKICAgICAgICBwcmludCAnR3JlYXRlcicKICAgIHJldHVybiAocGFyYW0yIC0gcGFyYW0xICsgMSkgb3IgTm9uZQpjbGFzcyBTb21lQ2xhc3M6CiAgICBwYXNzCj4%2BPiBtZXNzYWdlID0gJycnaW50ZXJwcmV0ZXIKLi4uIHByb21wdCcnJwpgYGAKCiMjIyDooajmoLwKfCBJdGVtICAgICAgfCAgICBWYWx1ZSB8IFF0eSAgfAp8IDotLS0tLS0tLSB8IC0tLS0tLS0tOnwgOi0tOiB8CnwgQ29tcHV0ZXIgIHwgMTYwMCBVU0QgfCAgNSAgIHwKfCBQaG9uZSAgICAgfCAgIDEyIFVTRCB8ICAxMiAgfAp8IFBpcGUgICAgICB8ICAgIDEgVVNEIHwgMjM0ICB8CgoKIyMjIOWkjemAieahhgoK5L2%2F55SoIGAtIFsgXWAg5ZKMIGAtIFt4XWAg6K%2Bt5rOV5Y%2Bv5Lul5Yib5bu65aSN6YCJ5qGG77yM5a6e546wIHRvZG8tbGlzdCDnrYnlip%2Fog73jgILkvovlpoLvvJoKCi0gW3hdIOW3suWujOaIkOS6i%2BmhuQotIFsgXSDlvoXlip7kuovpobkxCi0gWyBdIOW%2BheWKnuS6i%2BmhuTIKCj4gKirms6jmhI%2FvvJoqKuebruWJjeaUr%2BaMgeWwmuS4jeWujOWFqO%2B8jOWcqOWNsOixoeeslOiusOS4reWLvumAieWkjemAieahhuaYr%2BaXoOaViOOAgeS4jeiDveWQjOatpeeahO%2B8jOaJgOa7IeW%2Fhemhu%2BWcqCoq6ams5YWL6aOe6LGhKirkuK3kv67mlLkgTWFya2Rvd24g5Y6f5paH5omN5Y%2Bv55Sf5pWI44CC5LiL5Liq54mI5pys5bCG5Lya5YWo6Z2i5pSv5oyB44CCCgoK",
      actions: [
        { label: "分享到当前会话", category: "post", target: "specified" },
        { label: "分享到指定会话", category: "post", target: "unspecified" }
      ]
    },
    {
      title: "分享直播",
      data: "eyJoZWlnaHQiOjcyMCwidGh1bWJfdXJsIjoiaHR0cHM6Ly9hbmNob3Jwb3N0Lm1zc3RhdGljLmNvbS9jZG5pbWFnZS9hbmNob3Jwb3N0LzEwNTYvNDEvOTc3MWNiNWExMzkwMWUwZWQ5NzUxNGE5Y2Y5OGU4XzE2NjNfMTU2NjQ2OTAzMi5qcGc/aW1hZ2V2aWV3LzQvMC9ibHVyLzEvZm9ybWF0L3dlYnAiLCJ1cmwiOiJodHRwczovLzE0MDAyOTM2OTgudm9kMi5teXFjbG91ZC5jb20vZmQ2OWVkNmN2b2RjcTE0MDAyOTM2OTgvYzFkZGU5ZTk1Mjg1ODkwODA3MjE1NjQxNTYyL01yYW1BQVpjY01JQS5tcDQiLCJ3aWR0aCI6MTI4MH0=",
      actions: [
        { label: "分享到当前会话", category: "live", target: "specified" },
        { label: "分享到指定会话", category: "live", target: "unspecified" }
      ]
    },
    {
      title: "分享贴纸（旧）",
      data: "MDg2ODMwMGMtNWJiOS00YWJjLWFlYjctMjdhN2QzMzEwYjZj",
      actions: [
        { label: "分享到当前会话", category: "sticker", target: "specified" },
        { label: "分享到指定会话", category: "sticker", target: "unspecified" }
      ]
    },
    {
      title: "分享贴纸（新）",
      data: "eyJzdGlja2VyX2lkIjoiMDg2ODMwMGMtNWJiOS00YWJjLWFlYjctMjdhN2QzMzEwYjZjIn0=",
      actions: [
        { label: "分享到当前会话", category: "sticker", target: "specified" },
        { label: "分享到指定会话", category: "sticker", target: "unspecified" }
      ]
    },
    {
      title: "卡片禁止转发",
      data: "eyJhcHBfaWQiOiI3YzU4ZWNmOC1hMWY3LTQ0MGQtYTc4Zi0zYjhiNjM5MGUxZDUiLCJpY29uX3VybCI6Imh0dHBzOi8vb2hteXhpbi5vc3MtY24taG9uZ2tvbmcuYWxpeXVuY3MuY29tL3JlZF9wYWNrZXQucG5nIiwidGl0bGUiOiLmiJHkv6HnuqLljIUiLCJkZXNjcmlwdGlvbiI6IuadpeiHqiBLZXJuZWwiLCJhY3Rpb24iOiJodHRwczovL29obXkueGluL2NpcmNsZXMvNjA5MjE0My9yZWRfcGFja2V0cy83NjEzZGY2YS1lZGI5LTQ1ZjItOWYzNy05NTQ0OTM1MzE4NGQiLCJ1cGRhdGVkX2F0IjoiMjAyMC0wOC0wNlQyMjo0MTowNC4wNjg1ODkwOTVaIiwic2hhcmVhYmxlIjogZmFsc2V9",
      actions: [
        { label: "分享到当前会话", category: "app_card", target: "specified" },
        { label: "分享到指定会话", category: "app_card", target: "unspecified" }
      ]
    },
    {
      title: "直播禁止转发",
      data: "eyJoZWlnaHQiOjcyMCwidGh1bWJfdXJsIjoiaHR0cHM6Ly9hbmNob3Jwb3N0Lm1zc3RhdGljLmNvbS9jZG5pbWFnZS9hbmNob3Jwb3N0LzEwNTYvNDEvOTc3MWNiNWExMzkwMWUwZWQ5NzUxNGE5Y2Y5OGU4XzE2NjNfMTU2NjQ2OTAzMi5qcGc/aW1hZ2V2aWV3LzQvMC9ibHVyLzEvZm9ybWF0L3dlYnAiLCJ1cmwiOiJodHRwczovLzE0MDAyOTM2OTgudm9kMi5teXFjbG91ZC5jb20vZmQ2OWVkNmN2b2RjcTE0MDAyOTM2OTgvYzFkZGU5ZTk1Mjg1ODkwODA3MjE1NjQxNTYyL01yYW1BQVpjY01JQS5tcDQiLCJ3aWR0aCI6MTI4MCwic2hhcmVhYmxlIjpmYWxzZX0=",
      actions: [
        { label: "分享到当前会话", category: "live", target: "specified" },
        { label: "分享到指定会话", category: "live", target: "unspecified" }
      ]
    }
  ];

  const schemaItems = [
    ["【新】主网转账 MIX 单人", "https://mixin.one/pay/MIX{}?amount=&asset=&memo=", "https://mixin.one/pay/MIX3QEgBMATh7aD1YL3x3T5tzt9FSTMZru?amount=0.1&asset=965e5c6e-434c-3fa9-b780-c50f43cd955c&memo=7ye3da"],
    ["【新】主网转账 MIX 多签", "https://mixin.one/pay/MIX{}?amount=&asset=&memo=", "https://mixin.one/pay/MIXDLSoouhdcvedoiSzNHNRR4FNqVNwwgHUXkFoApTsz35fBHSNGyZEqGCzWuwDYrrWDwCXiaNcPec4C5cW8tCiE7BUHvs6A9YZ4B6FiFAEYY5Nd1etLA7aE7?amount=0.1&asset=965e5c6e-434c-3fa9-b780-c50f43cd955c&memo=abcde"],
    ["【新】主网转账 MIX 多签不带 Amount", "https://mixin.one/pay/MIX{}?amount=&asset=&memo=", "https://mixin.one/pay/MIXDLSoouhdcvedoiSzNHNRR4FNqVNwwgHUXkFoApTsz35fBHSNGyZEqGCzWuwDYrrWDwCXiaNcPec4C5cW8tCiE7BUHvs6A9YZ4B6FiFAEYY5Nd1etLA7aE7"],
    ["【新】主网转账 XIN 开头", "https://mixin.one/pay/XIN{}", "https://mixin.one/pay/XINSFtShWmATt1e5E96kCcKX7BmPaPP4mTEgh9fjGrtBgFqTYghw55Tc4G9FsbX11fJYup9MZQiPXZ1hyv8KN8VoBM2ERotx"],
    ["【新】扫码转账", "https://mixin.one/pay/{userid}", "https://mixin.one/pay/d3bee23a-81d4-462e-902a-22dae9ef89ff"],
    ["【新】支付链接", "https://mixin.one/pay/{userid}?amount=&asset=&memo", "https://mixin.one/pay/d3bee23a-81d4-462e-902a-22dae9ef89ff?amount=0.1&asset=965e5c6e-434c-3fa9-b780-c50f43cd955c&memo=abc"],
    ["【新】支付链接带 ReturnTo", "https://mixin.one/pay/{userid}?amount=&asset=&memo&return_to=", "https://mixin.one/pay/d3bee23a-81d4-462e-902a-22dae9ef89ff?amount=0.1&asset=965e5c6e-434c-3fa9-b780-c50f43cd955c&memo=Test%3F%26Test&return_to=https%3A%2F%2Fwww.baidu.com"],
    ["【旧】支付链接", "mixin://pay?recipient=&asset=&amount=&memo=&trace=", "mixin://pay?recipient=eb490018-da31-4fba-94a3-b949cb3948e5&asset=965e5c6e-434c-3fa9-b780-c50f43cd955c&amount=0.01&trace=881861ce-d3a9-4fb0-b811-38bd8b67c707"],
    ["【旧】支付链接 ReturnTo", "mixin://pay?recipient=&asset=&amount=&memo=&trace=", "mixin://pay?recipient=eb490018-da31-4fba-94a3-b949cb3948e5&asset=965e5c6e-434c-3fa9-b780-c50f43cd955c&amount=0.01&trace=881861ce-d3a9-4fb0-b811-38bd8b67c710&return_to=www.google.com"],
    ["用户弹窗", "mixin://users/:userid", "mixin://users/b26b9a74-40dd-4e8d-8e41-94d9fce0b5c0"],
    ["机器人首页", "mixin://apps/:appid?action=open", "mixin://apps/9ecca96f-3473-4f2a-8ad9-0ebb1a3b1fa7?action=open"],
    ["打开其他机器人主页", "mixin://apps/:appid?action=open", "mixin://apps/1ab1f241-b809-4790-bcfd-a1779bb1d313?action=open"],
    ["新窗口打开链接", "https://hot-bots.mixinbots.com/tools", "https://hot-bots.mixinbots.com/tools", "_blank"],
    ["测试 OneLink 跳转", "https://mixin.onelink.me/dHGb/iqwa3f34", "https://mixin.onelink.me/dHGb/iqwa3f34"],
    ["添加地址", "mixin://apps/:appid?action=open", "mixin://apps/1ab1f241-b809-4790-bcfd-a1779bb1d313?action=open"]
  ];

  const jsItems = [
    { title: "播放列表", description: "[https://dev-courses-storage.firesbox.com/...mp3]", type: "button", id: "playlist", label: "唤起" },
    { title: "所有资产", description: "getAssets", type: "button", id: "allassets", label: "唤起" },
    { title: "部分资产", description: "getAssets", type: "button", id: "assets", label: "唤起" },
    { title: "关闭窗口", description: "close", type: "button", id: "close", label: "唤起" },
    { title: "获取 TIP 地址", description: "ChainId: 43d61dcd-e413-450d-80b8-101d5e903357", type: "button", id: "tip-address", label: "唤起" },
    { title: "唤起 TIP 签名", description: "ChainId: 43d61dcd-e413-450d-80b8-101d5e903357", type: "button", id: "tip-sign", label: "唤起" },
    { title: "唤起 Uniswap", description: "[app.uniswap.org]", type: "link", href: "https://app.uniswap.org/", label: "唤起" },
    { title: "唤起 1inch", description: "[app.1inch.io]", type: "link", href: "https://app.1inch.io/", label: "唤起" }
  ];

  const shareBody = document.getElementById("share-body");
  const schemaBody = document.getElementById("schema-body");
  const jsBody = document.getElementById("js-body");
  const toast = document.getElementById("toast");
  let toastTimer;

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove("visible");
    }, 3600);
  }

  function getUrlParameter(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function getMixinContext() {
    let ctx = {};
    try {
      if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.MixinContext) {
        ctx = JSON.parse(prompt("MixinContext.getContext()"));
        ctx.platform = ctx.platform || "iOS";
      } else if (window.MixinContext && typeof window.MixinContext.getContext === "function") {
        ctx = JSON.parse(window.MixinContext.getContext());
        ctx.platform = ctx.platform || "Android";
      }
    } catch (error) {
      showToast("读取 MixinContext 失败: " + error.message);
    }
    return ctx || {};
  }

  function refreshContext() {
    return getMixinContext();
  }

  function renderShare() {
    shareBody.innerHTML = shareItems.map(function (item) {
      const actions = item.actions.map(function (action, index) {
        const primary = index === 0 ? " primary" : "";
        return '<button class="action-button' + primary + '" type="button" data-kind="share" data-category="' + action.category + '" data-target="' + action.target + '" data-payload="' + item.data + '">' + action.label + "</button>";
      }).join("");

      return "<tr><td><span class=\"title\">" + escapeHtml(item.title) + "</span></td><td><div class=\"action-group\">" + actions + "</div></td></tr>";
    }).join("");
  }

  function renderSchema() {
    schemaBody.innerHTML = schemaItems.map(function (item) {
      const target = item[3] ? ' target="' + item[3] + '"' : "";
      return "<tr><td><span class=\"title\">" + escapeHtml(item[0]) + "</span><span class=\"description\">" + escapeHtml(item[1]) + "</span></td><td><div class=\"action-group\"><a class=\"action-link primary\" href=\"" + item[2] + "\"" + target + ">唤起</a></div></td></tr>";
    }).join("") + "<tr><td><span class=\"title\">机器人授权</span><span class=\"description\">[PROFILE:READ + ASSETS:READ + CONTACTS:READ + ...]</span></td><td><div class=\"action-group\"><button class=\"action-button primary\" type=\"button\" data-kind=\"authorization\">唤起</button></div></td></tr>";
  }

  function renderJs() {
    jsBody.innerHTML = jsItems.map(function (item) {
      const action = item.type === "link"
        ? "<a class=\"action-link primary\" href=\"" + item.href + "\">" + item.label + "</a>"
        : "<button class=\"action-button primary\" type=\"button\" data-kind=\"js\" data-action=\"" + item.id + "\">" + item.label + "</button>";
      return "<tr><td><span class=\"title\">" + escapeHtml(item.title) + "</span><span class=\"description\">" + escapeHtml(item.description) + "</span></td><td><div class=\"action-group\">" + action + "</div></td></tr>";
    }).join("");
  }

  function playlist(audios) {
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.MixinContext && window.webkit.messageHandlers.playlist) {
      window.webkit.messageHandlers.playlist.postMessage(audios);
    } else if (window.MixinContext && typeof window.MixinContext.playlist === "function") {
      window.MixinContext.playlist(audios);
    } else {
      showToast("你的客户端还不支持 playlist");
    }
  }

  function getAssets(assets) {
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.MixinContext && window.webkit.messageHandlers.getAssets) {
      window.webkit.messageHandlers.getAssets.postMessage([assets, "assetsCallbackFunction"]);
    } else if (window.MixinContext && typeof window.MixinContext.getAssets === "function") {
      window.MixinContext.getAssets(assets, "assetsCallbackFunction");
    } else {
      showToast("你的客户端还不支持 getAssets");
    }
  }

  function getTipAddress(chainId) {
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.MixinContext && window.webkit.messageHandlers.getTipAddress) {
      window.webkit.messageHandlers.getTipAddress.postMessage([chainId, "tipAddressCallbackFunction"]);
    } else if (window.MixinContext && typeof window.MixinContext.getTipAddress === "function") {
      window.MixinContext.getTipAddress(chainId, "tipAddressCallbackFunction");
    } else {
      showToast("你的客户端还不支持 getTipAddress");
    }
  }

  function tipSign(chainId, msg) {
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.MixinContext && window.webkit.messageHandlers.tipSign) {
      window.webkit.messageHandlers.tipSign.postMessage([chainId, msg, "tipSignCallbackFunction"]);
    } else if (window.MixinContext && typeof window.MixinContext.tipSign === "function") {
      window.MixinContext.tipSign(chainId, msg, "tipSignCallbackFunction");
    } else {
      showToast("你的客户端还不支持 tipSign");
    }
  }

  function closeWindow() {
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.MixinContext && window.webkit.messageHandlers.close) {
      window.webkit.messageHandlers.close.postMessage("");
    } else if (window.MixinContext && typeof window.MixinContext.close === "function") {
      window.MixinContext.close();
    } else {
      showToast("你的客户端还不支持 close");
    }
  }

  function handleShare(category, target, payload) {
    const ctx = refreshContext();
    let resolvedCategory = category;
    if (resolvedCategory === "app_card_shareable") {
      resolvedCategory = "app_card";
    } else if (resolvedCategory === "live_shareable") {
      resolvedCategory = "live";
    }

    let url = "mixin://send?category=" + encodeURIComponent(resolvedCategory);
    if (target === "specified") {
      if (ctx.conversation_id) {
        url += "&conversation=" + encodeURIComponent(ctx.conversation_id);
      } else {
        showToast("未检测到 conversation_id，将继续按未指定会话处理。");
      }
    }
    url += "&data=" + payload;
    if (typeof window.open === "function") {
      const openedWindow = window.open(url);
      if (openedWindow !== null) {
        return;
      }
    }
    window.location.href = url;
  }

  function handleJsAction(action) {
    switch (action) {
      case "playlist":
        playlist([
          "https://dev-courses-storage.firesbox.com/7000101418/replay/8a564db8-e02b-4136-bd77-ec3526531616.mp3",
          "https://dev-courses-storage.firesbox.com/7000101418/replay/874dbe3f-f342-4974-b3b7-8830cc9a4ff0.mp3",
          "https://taskwall.zeromesh.net/test1.mp3",
          "https://taskwall.zeromesh.net/test2.mp3",
          "https://taskwall.zeromesh.net/test3.mp3",
          "https://taskwall.zeromesh.net/test4.mp3",
          "https://a.b.c/d.mp3"
        ]);
        break;
      case "allassets":
        getAssets([]);
        break;
      case "assets":
        getAssets(["b91e18ff-a9ae-3dc7-8679-e935d9a4b34b"]);
        break;
      case "close":
        closeWindow();
        break;
      case "tip-address":
        getTipAddress("43d61dcd-e413-450d-80b8-101d5e903357");
        break;
      case "tip-sign":
        tipSign("43d61dcd-e413-450d-80b8-101d5e903357", "hello world!");
        break;
      default:
        showToast("未知操作: " + action);
    }
  }

  function bindTabs() {
    document.querySelector(".tabs").addEventListener("click", function (event) {
      const tab = event.target.closest(".tab");
      if (!tab) {
        return;
      }
      const tabName = tab.getAttribute("data-tab");
      document.querySelectorAll(".tab").forEach(function (node) {
        node.classList.toggle("active", node === tab);
      });
      document.querySelectorAll(".panel").forEach(function (node) {
        node.classList.toggle("active", node.getAttribute("data-panel") === tabName);
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function bindActions() {
    document.getElementById("panels").addEventListener("click", function (event) {
      const button = event.target.closest("button");
      if (!button) {
        return;
      }
      const kind = button.getAttribute("data-kind");
      if (kind === "share") {
        handleShare(
          button.getAttribute("data-category"),
          button.getAttribute("data-target"),
          button.getAttribute("data-payload")
        );
      } else if (kind === "js") {
        handleJsAction(button.getAttribute("data-action"));
      } else if (kind === "authorization") {
        window.location.replace("https://mixin.one/oauth/authorize?client_id=14ba6299-5daf-4d07-9e2c-f84d413d2482&scope=PROFILE:READ+ASSETS:READ+PHONE:READ+CONTACTS:READ+MESSAGES:REPRESENT+SNAPSHOTS:READ+CIRCLES:READ+CIRCLES:WRITE+COLLECTIBLES:READ+STICKER:READ&response_type=code&return_to=");
      }
    });
  }

  function installCallbacks() {
    window.tipAddressCallbackFunction = function (address) {
      showToast(typeof address === "string" ? address : JSON.stringify(address));
    };
    window.tipSignCallbackFunction = function (signature) {
      showToast(typeof signature === "string" ? signature : JSON.stringify(signature));
    };
    window.assetsCallbackFunction = function (assets) {
      showToast(JSON.stringify(assets, null, 2));
    };
  }

  function init() {
    renderShare();
    renderSchema();
    renderJs();
    bindTabs();
    bindActions();
    installCallbacks();
    refreshContext();
    const code = getUrlParameter("code");
    if (code) {
      showToast("OAuth code: " + code);
    }
  }

  init();
})();
