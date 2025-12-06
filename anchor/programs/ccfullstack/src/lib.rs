#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;

declare_id!("32HwkraijDSzpJiueQnqXXr5ZQziYtpfRBJbXV6UGHCX");

#[program]
pub mod ccfullstack {
    use super::*;

    pub fn close(_ctx: Context<CloseCcfullstack>) -> Result<()> {
        Ok(())
    }

    pub fn decrement(ctx: Context<Update>) -> Result<()> {
        ctx.accounts.ccfullstack.count = ctx.accounts.ccfullstack.count.checked_sub(1).unwrap();
        Ok(())
    }

    pub fn increment(ctx: Context<Update>) -> Result<()> {
        ctx.accounts.ccfullstack.count = ctx.accounts.ccfullstack.count.checked_add(1).unwrap();
        Ok(())
    }

    pub fn initialize(_ctx: Context<InitializeCcfullstack>) -> Result<()> {
        Ok(())
    }

    pub fn set(ctx: Context<Update>, value: u8) -> Result<()> {
        ctx.accounts.ccfullstack.count = value.clone();
        Ok(())
    }
}

#[derive(Accounts)]
pub struct InitializeCcfullstack<'info> {
    #[account(mut)]
    pub payer: Signer<'info>,

    #[account(
  init,
  space = 8 + Ccfullstack::INIT_SPACE,
  payer = payer
    )]
    pub ccfullstack: Account<'info, Ccfullstack>,
    pub system_program: Program<'info, System>,
}
#[derive(Accounts)]
pub struct CloseCcfullstack<'info> {
    #[account(mut)]
    pub payer: Signer<'info>,

    #[account(
  mut,
  close = payer, // close account and return lamports to payer
    )]
    pub ccfullstack: Account<'info, Ccfullstack>,
}

#[derive(Accounts)]
pub struct Update<'info> {
    #[account(mut)]
    pub ccfullstack: Account<'info, Ccfullstack>,
}

#[account]
#[derive(InitSpace)]
pub struct Ccfullstack {
    count: u8,
}
